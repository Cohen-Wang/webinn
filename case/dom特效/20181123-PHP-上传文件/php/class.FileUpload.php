<?php
    /**
     * Created by PhpStorm.
     * User: cyber
     * Date: 2018/11/22
     * Time: 15:56
     */

    class FileUpload {
        private $filepath;// 指定上传路径
        private $allowtype = array('gif', 'png', 'jpg', 'jpeg');// 允许的类型
        private $maxsize = 1000000;// 允许的大小
        private $israndname = true;// 是否使用随机文件名 false-使用原文件名
        // 内部函数要用到的变量，超过一个函数用到，就写成全局的
        private $originName;// 源文件名称
        private $tempFileName;// 临时文件名称
        private $fileType;// 文件类型
        private $fileSize;// 文件大小
        private $newFileName;// 新文件名
        private $errorNum = 0;// 错误号
        private $errorMsg = "";// 错误报告

        /**
         * 构造
         */
        public function __construct($options = array()) {
            foreach ($options as $key=>$val) {
                $key = strtolower($key);
                $arr = get_class_vars(get_class($this));// 获取当前对象（不是类）的属性
                // 查看传入的$key 是不是 这个对象的属性
                if (!array_key_exists($key, $arr)) {
                    continue;// 退出本次循环，继续下次循环
                }
                // 如果是 对象属性，那么设置对象属性
                $this->setOption($key, $val);
            }
        }

        /**
         * 设置私有属性
         */
        private function setOption ($key, $value) {
            $this->$key = $value;
        }

        /***************************************************************************************************************
         * 错误方法
         */
        private function getError () {
            $str = "上传文件<span color='red'> {$this->originName}</span> 时出错：";
            //
            switch ($this->errorNum) {
                case 4 : $str .= "没有文件上传";break;
                case 3 : $str .= "文件只被部分上传";break;
                case 2 : $str .= "上传文件超过了HTML表单中MAX_FILE_SIZE的最大值";break;
                case 1 : $str .= "上传文件超过了php.ini中upload_max_filesize中的值";break;
                case -1 : $str .= "未允许的文件类型";break;
                case -2 : $str .= "文件过大，不能超过{$this->maxsize}个字节";break;
                case -3 : $str .= "上传失败";break;
                case -4 : $str .= "建立存放上传文件目录失败，请重新指定上传目录";break;
                case -5 : $str .= "必须指定上传文件的路径";break;
                case -6 : $str .= "复制文件时，失败";break;
                default : $str .= "未知错误";
            }
            return $str."</br>";
        }

        /***************************************************************************************************************
         * 限制上传文件 属性的方法
         */

        /**
         * 用于检查上传路径是否合法
         */
        private function checkFilePath () {
            // 如果路径为空，返回false
            if (empty($this->filepath)) {
                $this->setOption("errorNum", -5);
                return false;
            }
            // 如果文件不存在，或者不可写，返回false
            if (!file_exists($this->filepath) || !is_writable($this->filepath)) {
                if (!mkdir($this->filepath, 0755)) {
                     $this->setOption("errorNum", -4);
                     return false;
                }
            }
            //
            return true;
        }

        /**
         * 用于检查上传文件的类型
         */
        private function checkFileType () {
            if (in_array(strtolower($this->fileType), $this->allowtype)) {
                return true;
            }
            else {
                $this->setOption("errorNum", -1);
                return false;
            }
        }

        /**
         * 用于检查上传文件的大小
         */
        private function checkFileSize () {
            if ($this->fileSize > $this->maxsize) {
                $this->setOption("errorNum", -2);
                return false;
            }
            else {
                return true;
            }
        }

        /**
         * 设置上传后的文件名称
         */
        private function setNewFileName () {
            if ($this->israndname) {
                $this->setOption("newFileName", $this->setRandName());
            }
            else {
                $this->setOption("newFileName", $this->originName);
            }
        }

        /**
         * 设置随机文件名称
         */
        private function setRandName () {
            //$fileName = date('Ymdhis').rand(100, 199);
            $fileName = date('Ymdhis').uniqid();
            return $fileName.'.'.$this->fileType;
        }

        /**
         * 用于上传一个文件
         */
        public function uploadFile ($fileField) {
            $flag = true;
            // 检查路径是否正确
            if (!$this->checkFilePath()) {
                $this->errorMsg = $this->getError();
                return false;
            }
            $name = $_FILES[$fileField]['name'];
            $tmp_name = $_FILES[$fileField]['tmp_name'];
            $size = $_FILES[$fileField]['size'];
            $error = $_FILES[$fileField]['error'];
            // 赋值
            // 上传多个文件
            if (is_array($name)) {
                //
                $errors = array();
                // 判断是否合法
                for ($i = 0; $i < count($name); $i++) {
                    if ($this->setFiles($name[$i], $tmp_name[$i], $size[$i], $error[$i])) {
                        if (!$this->checkFileSize() || !$this->checkFileType()) {
                            $errors[] = $this->getError();
                            $flag = false;
                        }
                    }
                    else {
                        $errors[]=$this->getError();
                        $flag = false;
                    }
                    //
                    if (!$flag) {
                        $this->setFiles();
                    }
                }

                // 如果都合法
                if ($flag) {
                    $fileNames = array();
                    //
                    for ($i = 0; $i < count($name); $i++) {
                        if ($this->setFiles($name[$i], $tmp_name[$i], $size[$i], $error[$i])) {
                            $this->setNewFileName();
                            if (!$this->copyFile()) {
                                $errors = $this->getError();
                                $flag = false;
                            }
                            else {
                                $fileNames[] = $this->newFileName;
                            }
                        }
                    }
                    $this->newFileName = $fileNames;
                 }

                //
                $this->errorMsg = $errors;
                // 返回
                return $flag;
            }

            // 上传你单个文件
            else {
                if ($this->setFiles($name, $tmp_name, $size, $error)) {
                    if ($this->checkFileSize()) {
                        if ($this->checkFileType()) {
                            $this->setNewFileName();
                            //
                            if ($this->copyFile()) {
                                return true;
                            }
                            else {
                                $this->setOption("errorNum", -6);
                                $flag = false;
                            }
                        }
                        else {
                            $flag = false;
                        }
                    }
                    else {
                        $flag = false;
                    }
                }
                else {
                    $flag = false;
                }
                // 获取错误报告
                if (!$flag) $this->errorMsg = $this->getError();
                // 返回
                return $flag;
            }
        }

        /**
         * 拷贝文件
         */
        private function copyFile () {
            if (!$this->errorNum) {
                $filepath = rtrim($this->filepath, '/').'/';
                $filepath .= $this->newFileName;
                // 上传
                if (@move_uploaded_file($this->tempFileName, $filepath)) {
                    return true;
                }
                else {
                    $this->setOption("errorNum", -3);
                    return false;
                }
            }
            else {
                return false;
            }
        }

        /**
         * 设置和$_FILES有关的内容
         */
        private function setFiles($name = "", $tmp_name = "", $size = 0, $error = 0) {
            $this->setOption("errorNum", $error);
            // 如果有错误
            if ($error) return false;
            //
            $this->setOption("originName", $name);
            $this->setOption("tempFileName", $tmp_name);
            // 获取文件后缀名
            // 方法一
            //$arr = explode('.', $name);
            //$this->setOption("fileType", strtolower($arr[count($arr)-1]));
            // 方法二
            $extension = pathinfo($name, PATHINFO_EXTENSION);
            $this->setOption("fileType", strtolower($extension));

            $this->setOption("fileSize", $size);

            return true;
        }

        /**
         * 用于上传后的文件名
         */
        public function getNewFileName () {
            return $this->newFileName;
        }

        /**
         * 上传如果失败，调用这个方法，就可以查看错误报告
         */
        public function getErrorMsg () {
            return $this->errorMsg;
        }

    }
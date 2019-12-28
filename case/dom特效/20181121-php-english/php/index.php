<?php
    /**
     * Created by PhpStorm.
     * User: cyber
     * Date: 2018/11/21
     * Time: 21:08
     */



    $filename = '../english.txt';


    if ($_POST['action']) {
        $action = $_POST['action'];
        //
        switch ($action) {
            case 'read' :
                readContent ($filename);
                break;

            case 'write' :
                // 拼接
                $str = $_POST['english'].'<|>'.$_POST['chinese'].'<|>'.$_POST['pronunciation'].'<|>'.time().'<||>';
                // 写入
                write($filename, $str);
                //
                readContent ($filename);
                break;

            default :
                echo 'default';
        }
    }

    /**
     *
     */
    function readContent ($filename) {
        $json = '';
        if (file_exists($filename)) {
            $newContent = read($filename);
            $newContent = rtrim($newContent, '<||>');
            //
            $rows = explode('<||>', $newContent);
            //
            foreach ($rows as $row) {
                list($english, $chinese, $pronunciation, $date) = explode('<|>', $row);
                //
                $json .= urldecode(json_encode(array(
                        "english" => $english,
                        "chinese" => $chinese,
                        "pronunciation" => $pronunciation,
                        "date" => $date,
                    ))).',';
            }
            echo '{'.'"content":['.substr($json, 0, strlen($json) - 1).']}';// 返回
        } else {
            echo '文件不存在';
        }
    }

    /**
     *
     */
    function read ($filename) {
        $file = fopen($filename, 'r');
        $content = fread($file, filesize($filename));
        fclose($file);
        return $content;
    }

    /**
     * 写
     */
    function write ($filename, $content) {
        $file = fopen($filename, 'a');
        fwrite($file, $content);
        fclose($file);
    }
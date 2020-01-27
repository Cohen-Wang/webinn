<?php
	class upload{
		public $upload_form_filed;
		public $maxsize;
		public $type_array;
		public $path;
	
		function __construct(){
			$this -> upload_form_filed = "filefiled";
			$this -> maxsize = "200000";
			$this -> type_array = array("images/jpg","images/jpeg","images/png","images/pjpeg","images/gif");
			$this -> path = "upload/";
		}
		
		function upload_file(){
			$file = $_FILES[$this -> upload_form_filed];
			
			$file_name = $file["name"];
			$file_type = $file["type"];
			$file_tmp_name = $file["tmp_name"];
			$file_error = $file["error"];
			$file_size = $file["size"];
			
			//判断大小
			if($file_size > $this -> maxsize){
				echo "文件太大";
				exit;
			}
			
			//判断格式
			if(!in_array($file_type,$this ->type_array)){
				echo "文件格式不正确";
				exit;
			};
			
			//重命名
			date_default_timezone_set("Asia/Shanghai");
			$ymd = date("YmyHis");
			$file_name_array = explode(".",$file_name);
			$type = $file_name_array[1];
			$new_name = $ymd.".".$type;
			
			if($file_error == 0){
				move_uploaded_file($file_tmp_name,$this -> path.$new_name);
				echo "文件上传成功";
			};
		}
	}
?>
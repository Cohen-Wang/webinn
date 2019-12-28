<?php
	include "upload.class.php";
	
	if(isset($_POST["submit"])){
		$upload = new upload();
		$upload -> upload_file();
		/*$file = $_FILES["filefiled"];
		$type_array = array("image/jpg","image/jpeg","image/png","image/pjpeg","image/gif");
		$maxsize = 200000;
		
		$file_name = $file["name"];
		$file_type = $file["type"];
		$file_tmp_name = $file["tmp_name"];
		$file_error = $file["error"];
		$file_size = $file["size"];
		
		//判断大小
		if($file_size > $maxsize){
			echo "文件太大";
			exit;
		}
		
		//判断格式
		if(!in_array($file_type,$type_array)){
			echo "文件格式不正确";
			exit;
		};
		
		//重命名
		$ymd = date("YmyHis");
		$file_name_array = explode(".",$file_name);
		$type = $file_name_array[1];
		$new_name = $ymd.".".$type;
		
		if($file_error == 0){
			move_uploaded_file($file_tmp_name,"upload/".$new_name);
			echo "文件上传成功";
		};*/
	};
?>


<form method="post" enctype="multipart/form-data" name="form1" id="form1">
	<label>
		<input type="file" name="filefiled" id="filefiled" value="" />
	</label>
	<label>
		<input type="submit" name="submit" id="submit" value="submit" />
	</label>
</form>
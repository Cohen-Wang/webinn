<?php
	//sleep(1);
	require 'config.php';
	
	//图片文件
	$file = $_FILES["caseImage"];
	$type_array = array("image/jpg","image/jpeg","image/png","image/pjpeg","image/gif");
	$maxsize = 200000;
	
	$file_name1 = $file["name"];
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
	$file_name_array = explode(".",$file_name1);
	$type = $file_name_array[1];
	$new_name1 = $ymd.".".$type;
	
	if($file_error == 0){
		move_uploaded_file($file_tmp_name,"../images/caseShow/".$new_name1);
		echo "文件上传成功";
	};
	$caseImg = "images/caseShow/".$new_name1;
	
	//html文件
	$file = $_FILES["caseFile"];
	$type_array = array("text/html");
	$maxsize = 200000;
	
	$file_name2 = $file["name"];
	$file_type = $file["type"];
	$file_tmp_name = $file["tmp_name"];
	$file_error = $file["error"];
	$file_size = $file["size"];
	
	echo $file_type = $file["type"];
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
	$file_name_array = explode(".",$file_name2);
	$type = $file_name_array[1];
	$new_name2 = $ymd.".".$type;
	if($file_error == 0){
		move_uploaded_file($file_tmp_name,"../caseShow/".$new_name2);
		echo "文件上传成功";
	};
	$caseFile = "caseShow/".$new_name2;
	
	//上传数据库
	$query = "INSERT INTO webcase (title ,caseimage, casefile, caselike, casedislike, username, date) VALUES ('{$_POST['title']}', '$caseImg', '$caseFile', 0, 0,'{$_POST['username']}',  NOW())";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>
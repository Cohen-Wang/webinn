<?php
	require 'cyber.config.php';
	
	usleep(500000);
	
	//图片文件
//	$file = $_FILES["userImage"];
//	$type_array = array("image/jpg","image/jpeg","image/png","image/pjpeg","image/gif");
//	$maxsize = 200000;
//	
//	$file_name1 = $file["name"];
//	$file_type = $file["type"];
//	$file_tmp_name = $file["tmp_name"];
//	$file_error = $file["error"];
//	$file_size = $file["size"];
//	
//	//判断大小
//	if($file_size > $maxsize){
//		echo "文件太大";
//		exit;
//	}
//	
//	//判断格式
//	if(!in_array($file_type,$type_array)){
//		echo "文件格式不正确";
//		exit;
//	};
//	
//	//重命名
//	$username = $_POST['username'];
//	$file_name_array = explode(".",$file_name1);
//	$type = $file_name_array[1];
//	$new_name1 = $username.".".$type;
//	
//	if($file_error == 0){
//		move_uploaded_file($file_tmp_name,"../images/portrait/".$new_name1);
//		echo "文件上传成功";
//	};
//	
//	$portrait = "images/portrait/".$new_name1;
	
	$query = "INSERT INTO user 
			(
			username , password , email , sex , 
			education , school , major , qq , wechat , github , 
			province , city , district , introduction
			) 
			VALUES 
			(
			'{$_POST['username']}' , 
			sha1('{$_POST['password']}') ,
			'{$_POST['email']}' , 
			'{$_POST['sex']}' , 
			'{$_POST['education']}' , 
			'{$_POST['school']}' , 
			'{$_POST['major']}' , 
			'{$_POST['qq']}' , 
			'{$_POST['wechat']}' , 
			'{$_POST['github']}' , 
			'{$_POST['province']}' , 
			'{$_POST['city']}' , 
			'{$_POST['district']}' , 
			'{$_POST['introduction']}'
			)";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>
<?php
	require 'cyber.config.php';
	
	usleep(500000);
	
	$query = "INSERT INTO temp_user (name , age , major , country) 
			VALUES ('{$_POST['name']}' , '{$_POST['age']}' , '{$_POST['major']}' , '{$_POST['country']}')";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>
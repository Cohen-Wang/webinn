<?php
	
	//sleep(1);
	require 'config.php';
	
	$query = "INSERT INTO message (title, content, username, date) VALUES ('{$_POST['title']}', '{$_POST['content']}', '{$_POST['username']}', NOW())";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>
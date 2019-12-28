<?php
	require 'config.php';
	
	usleep(500000);
	
	$_pass = sha1($_POST['loginPassword']);
	
	$query = mysql_query("SELECT username,password FROM user WHERE username='{$_POST['loginUser']}' AND password='{$_pass}'") or die('SQL 错误！');
	
	if (mysql_fetch_array($query, MYSQL_ASSOC)) {
		echo 'true';
	} else {
		echo 'false';
	}
	
	mysql_close();
?>
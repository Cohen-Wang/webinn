<?php
	require 'config.php';
	
	$query = mysql_query("SELECT username FROM user WHERE username='{$_POST['username']}'") or die('SQL 错误！');
	
	if (mysql_fetch_array($query, MYSQL_ASSOC)) {
		echo 'false';
	} else {
		echo 'true';
	}
	
	mysql_close();
?>
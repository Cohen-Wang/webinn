<?php
	sleep(1);
	require 'config.php';
	
	$query = "INSERT INTO html (markup, word, effect, version) VALUES ('{$_POST['markup']}', '{$_POST['word']}', '{$_POST['effect']}', '{$_POST['version']}')";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>
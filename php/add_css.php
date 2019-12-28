<?php
	sleep(1);
	require 'config.php';
	
	$query = "INSERT INTO css (number, word, ie, firefox, chrome, opera, date) VALUES ('{$_POST['number']}', '{$_POST['word']}', '{$_POST['ie']}', '{$_POST['firefox']}', '{$_POST['chrome']}', '{$_POST['opera']}', NOW())";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>
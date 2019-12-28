<?php
	header('Content-Type:text/html; charset=utf-8');
	
	/*服务器*/
	define('DB_HOST', 'localhost');
	/*用户名 密码*/
	define('DB_USER', 'wanghaitao');
	define('DB_PWD', 'qqqqqqqq');
	/*数据库*/
	define('DB_NAME', 'cyber');			
	
	$conn = @mysql_connect(DB_HOST, DB_USER, DB_PWD) or die('数据库链接失败：'.mysql_error());
	
	@mysql_select_db(DB_NAME) or die('数据库错误：'.mysql_error());
	
	@mysql_query('SET NAMES UTF8') or die('字符集错误：'.mysql_error());
?>
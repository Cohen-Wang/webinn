<?php
	require 'cyber.config.php';
	
	//设置每页显示多少条内容
	if( isset($_POST['currentPageSize']) ){
		$currentPageSize = $_POST['currentPageSize'];
	} else {
		$currentPageSize = 5;
	};
	
	//设置显示第几页
	if( isset($_POST['currentPage']) ){
		$currentPage = ($_POST['currentPage'] - 1) * $currentPageSize;
	} else {
		$currentPage = 0;
	};
	
	//模糊查询
	if( isset($_POST['searchVal']) ){
		$searchVal = $_POST['searchVal'];
	} else {
		$searchVal = '';
	};
	
	$sql = "SELECT id , name , age , major , country FROM temp_user WHERE name LIKE '%$searchVal%' OR age LIKE '%$searchVal%' OR major LIKE '%$searchVal%' OR country LIKE '%$searchVal%' ORDER BY id ASC LIMIT $currentPage , $currentPageSize";
	
	$query = mysql_query($sql) or die('SQL 错误！');
	
	$json = '';
	
	$get_total_pages_sql = "SELECT id , name , age , major , country FROM temp_user WHERE name LIKE '%$searchVal%' OR age LIKE '%$searchVal%' OR major LIKE '%$searchVal%' OR country LIKE '%$searchVal%' ORDER BY id ASC";
	
	$get_total_pages_query = mysql_query($get_total_pages_sql) or die('SQL 错误！');
	
	$total = mysql_num_rows($get_total_pages_query);
	
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		foreach ( $row as $key => $value ) {
			$row[$key] = urlencode(str_replace("\n","", $value));
		}
		$json .= urldecode(json_encode($row)).',';
		
	};
	
	echo '{'.'"total":'.$total.',"content":['.substr($json, 0, strlen($json) - 1).']}';
	//echo '['.substr($json, 0, strlen($json) - 1).']';
	
	mysql_free_result($query);
	
	mysql_close($conn);
	
	
?>
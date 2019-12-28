<?php
/**
 * Created by PhpStorm.
 * User: Cohen_Wang
 * Date: 2019/1/30
 * Time: 11:22
 */


header('Content-type: application/json');
// 获取回调函数名
$jsoncallback = htmlspecialchars($_GET['jsoncallback']);
$keyword = htmlspecialchars($_GET['wb']);
// json数据
$filename = "../data/test.json";
$jsonString = file_get_contents($filename);
$jsonObject = json_decode($jsonString, true);
//
$temp_data = $jsonObject[$keyword];
//
$json_data = json_encode($temp_data);
// 输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
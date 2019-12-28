<?php


//
set_time_limit(0);
//
$index= file_get_contents('./index.txt');

while (true) {
    // 获取md5
    $md5 = file_get_contents('./md5.txt');
    //
    if ($md5 !== md5_file('./content.txt')) {
        $content = file_get_contents('./content.txt');

        // 返回
        echo json_encode(array(
            "index"=>$index,
            "content"=>$content,
        ));
        // 为下次的准备
        $index++;
        file_put_contents('./index.txt', $index);// 写索引
        file_put_contents('./md5.txt', md5_file('./content.txt'));// 写md5
        // ❤
        ob_flush();
        flush();
        exit;
    }
    //
    sleep(2);
}
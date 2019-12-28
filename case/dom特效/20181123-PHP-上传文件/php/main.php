<?php
    /**
     * Created by PhpStorm.
     * User: cyber
     * Date: 2018/11/22
     * Time: 15:54
     */

    require "./class.FileUpload.php";

    date_default_timezone_set('Asia/Shanghai');
    ini_set('upload_max_filesize', '20M');
    //ini_set('max_file_uploads', 50);

    if (true) {
        echo "<pre>";
        print_r($_FILES);
        //exit();
    }

    /**
     * 初始化
     */
    $up = new FileUpload(array(
        'filePath' => '../res/123',
        'allowtype' => array('gif', 'png', 'jpg', 'jpeg', 'txt'),
        'maxSize'  => 20 * pow(2, 20),
        'israndname' => true,
    ));

    // 单个
//    if ($up->uploadFile('pic')) {
//        echo $up->getNewFileName();
//    }
//    else {
//        echo $up->getErrorMsg();
//    }

    // 多个文件上传
    if ($up->uploadFile('file')) {
        print_r($up->getNewFileName());
    }
    else {
        print_r($up->getErrorMsg());
    }

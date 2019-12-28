<?php

/**
 * Created by PhpStorm.
 * User: Cohen_Wang
 * Date: 2019/1/26
 * Time: 15:22
 */


$num = mt_rand(0,100);

if ($num > 50) {
    echo json_encode(array(
        "num" => $num,
        "result" => true
    ));
} else {
    echo json_encode(array(
        "num" => $num,
        "result" => false
    ));
}
/**
 * +----------------------------------------------------------------------
 * | name: lottery
 * +----------------------------------------------------------------------
 * | Copyright (c) 2019
 * +----------------------------------------------------------------------
 * | Author: cohen_wang <615940742@qq.com>
 * +----------------------------------------------------------------------
 */

// +----------------------------------------------------------------------
// | 奖品等级分布
// +----------------------------------------------------------------------
const PRIZE_LEVEL = [
    [1],// 一等奖
    [2],// 二等奖
    [3],// 三等奖
    [5],// 四等奖
    // 其他级别奖励
];

// +----------------------------------------------------------------------
// | 名单列表
// +----------------------------------------------------------------------
const NAME_LIST = [
    '罗可成',
    '赵星',
    '吴俊',
    '王海涛',
    '张强',
    '隆尧',
    '张三',
    '李四',
    '王五',
    '孙正义',
    '刘德华',
];


// +----------------------------------------------------------------------
// | 名单列表
// +----------------------------------------------------------------------
const RESOURCE_CONFIG = {
    image: [
        {name: 'tiefan', url: './res/image/scene/cut/tiefan/logo.png',},
        {name: 'newYearBg', url: './res/image/scene/lottery/new_year/bg.jpg',},
        {name: 'newYearLantern', url: './res/image/scene/lottery/new_year/lantern_1.png',},



        {name: 'test1', url: './res/image/temp/a (1).jpg',},
        {name: 'test2', url: './res/image/temp/a (2).jpg',},
        {name: 'test3', url: './res/image/temp/a (3).jpg',},
        {name: 'test4', url: './res/image/temp/a (4).jpg',},
        {name: 'test5', url: './res/image/temp/a (5).jpg',},
        {name: 'test6', url: './res/image/temp/a (6).jpg',},
        {name: 'test7', url: './res/image/temp/a (7).jpg',},
        {name: 'test8', url: './res/image/temp/a (8).jpg',},
        {name: 'test9', url: './res/image/temp/a (9).jpg',},
        {name: 'test10', url: './res/image/temp/a (10).jpg',},
        {name: 'test11', url: './res/image/temp/a (11).jpg',},
        {name: 'test12', url: './res/image/temp/a (12).jpg',},
        {name: 'test13', url: './res/image/temp/a (13).jpg',},
        {name: 'test14', url: './res/image/temp/a (14).jpg',},
        {name: 'test15', url: './res/image/temp/a (15).jpg',},
        {name: 'test16', url: './res/image/temp/a (16).jpg',},
        {name: 'test17', url: './res/image/temp/a (17).jpg',},
        {name: 'test18', url: './res/image/temp/a (18).jpg',},
        {name: 'test19', url: './res/image/temp/a (19).jpg',},
    ],
    audio: [
        {
            name: 'open-show',
            url: './res/audio/open-show.mp3',
        }
    ],
};
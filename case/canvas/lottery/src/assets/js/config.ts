// +----------------------------------------------------------------------
// | 名单列表
// +----------------------------------------------------------------------
export const RESOURCE_CONFIG: any = {
    image: [
        {name: 'tiefan', url: './assets/res/images/scene/cut/tiefan/logo.png',},
        {name: 'newYearBg', url: './assets/res/images/scene/lottery/new_year/bg.png',},
        {name: 'name_list_title', url: './assets/res/images/scene/lottery/new_year/name_list_title.png',},
        {name: 'name_list_bg', url: './assets/res/images/scene/lottery/new_year/name_list_bg.png',},
        {name: 'prize_level_bg', url: './assets/res/images/scene/lottery/new_year/prize_level_bg.png',},

        {name: 'newYearLantern', url: './assets/res/images/scene/lottery/new_year/lantern_1.png',},
        {name: 'treasureBox', url: './assets/res/images/scene/lottery/new_year/treasureBox.png',},
        {name: 'boom', url: './assets/res/images/scene/lottery/new_year/boom.png',},
    ],
    audio: [
        {
            name: 'open-show',
            url: './res/audio/open-show.mp3',
        }
    ],
};


// +----------------------------------------------------------------------
// | 过场场景的配置
// +----------------------------------------------------------------------
export const CUT_SCENE_CONFGI: any = {
    // 当多少秒内，没有任何操作，就返回到过场场景
    allowOvertime: 600 * 1000,// 单位：ms
};

// +----------------------------------------------------------------------
// | 抽奖场景的配置
// +----------------------------------------------------------------------
export const LOTTERY_SHOW_CONFIG: any = {

    // 奖品等级分布（注意：所有数值综合，一定要和nameList属性的长度一样）
    prizeLevel: [
        [1],// 如：[1]，即：一等奖一名
        [2],// 如：[2]，即：二等奖二名
        [3],// 如：[3]，即：三等奖三名
        [5],
        // 其他级别奖励
    ],

    // 参与抽奖的人员名字组成的名单
    nameList: [
        '罗可成',
        '赵星',
        '吴俊',
        '王海涛',
        '张强',
        '王思聪',
        '马云',
        '马化腾',
        '刘强东',
        '孙正义',
        '雷军',
        '哈哈',
        '嘿嘿',
        '嘻嘻',
        '呵呵',
        '大王',
        '小王',
        '老张',
        '黄晓明',
        '刘亦菲',
        '赵薇',
    ],

    // 闪烁的文字
    nameBlink: {
        // 文字大小
        fontSize: 80,
        // 文字粗细
        fontWeight: 900,
        // 文字颜色
        color: '#ff0',
    },

    // 宝箱
    treasureBox: {
        // 宝箱图片宽度
        width: 100,
        // 宝箱图片高度（可选），传了就以传参高度计算，不传参则自动根据图片比例结算
        //height: 100
        // 宝箱移动所需帧数，数值越小，速度越快
        duration: 60,
    },

    // 已经抽奖后，存放名称的地方
    history: {
        // 以canvas原点为基础，x越大，越靠右
        x: 200,
        // 以canvas原点为基础，y越大，越靠下
        y: 600,
        // 字体大小
        fontSize: 34,
        // 字体颜色
        color: '#ffe400',
    },

    // 当宝箱爆炸后，生成的名字字体的属性
    text: {
        // 字体颜色
        color: '#ffe400',
        // 字体大小
        fontSize: 120,
        // 字体粗细
        fontWeight: 900,
        // 字体移动所需帧数，数值越小，速度越快
        duration: 60,
    },

    // 奖励等级字体（即：第1等奖，第2等奖...）
    levelText: {
        // 字体颜色
        color: '#ffe400',
        // 字体大小
        fontSize: 30,
        // 字体粗细
        fontWeight: 900,
    },

    // 获奖名单
    winnerList: {
        x: 200,
        y: 200,
    }
};
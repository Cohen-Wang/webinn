
import { RESOURCE_CONFIG } from "./config"
import { SceneController } from "./app/Lottery/SceneController/SceneController"

import { TextLoading } from "./app/Lottery/Sence/TextLoading"

import { RayLogo, NewYear } from "./app/Lottery/Sence/RayLogo"


import { NameBlink } from "./app/Lottery/Lottery/NameBlink"




let config: any = RESOURCE_CONFIG.image;

let sceneController: any = new SceneController({
    resConfig: config,
    LoadScene: TextLoading,
    CutScene: RayLogo,
    LotteryScene: NewYear,
    LotteryShow: NameBlink,
    allowOvertime: 300 * 1000,
    isShowStats: false,
});
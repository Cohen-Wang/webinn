import { RESOURCE_CONFIG, CUT_SCENE_CONFGI } from "./config"
import { SceneController } from "./app/Lottery/SceneController/SceneController"
import { TextLoading } from "./app/Lottery/Sence/TextLoading"
import { RayLogo, NewYear } from "./app/Lottery/Sence/RayLogo"
import { TreasureBoxDown } from "./app/Lottery/Lottery/TreasureBoxDown"


let config: any = RESOURCE_CONFIG.image;
let sceneController: any = new SceneController({
    resConfig: config,
    LoadScene: TextLoading,
    CutScene: RayLogo,
    LotteryScene: NewYear,
    LotteryShow: TreasureBoxDown,
    allowOvertime: CUT_SCENE_CONFGI.allowOvertime,
    isShowStats: false,
});
import { RESOURCE_CONFIG } from "./config"
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
    allowOvertime: 10 * 1000,
    isShowStats: false,
});
import Scene from "./Scene"
import { SolidText } from "../Element/Text"

export class TextLoading extends Scene {
    public text: any;

    constructor (options: any) {
        super (options);

        let loadingTextOptions = {
            x: this.can.width / 2,
            y: this.can.height / 2,
            color: '#abcdef',
        };

        this.text = new SolidText(loadingTextOptions);
    }

    public show (loadedNumber: number, allNumber: number) {
        let text = '资源加载中...' + '  （' + loadedNumber + '/' + allNumber + '）';
        this.ctx.fillStyle = '#0f0f0f';
        this.ctx.fillRect(0, 0, this.can.width, this.can.height);
        this.text.text = text;
        this.text.render(this.ctx);
    }
}
import IElement from "./IElement"

let _random = function (min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
};

/**
 * ����typescript�� Math.sign Ҫ�����������ĺܣ�����д�����������
 */
let _sign = function (n: number): any {
    if (n > 0) {
        return 1
    } else if (n === 0) {
        return 0;
    } else if (n === -0) {
        return -0;
    } else if (n < 0) {
        return -1;
    } else {
        return NaN;
    }
};


export class Ray implements IElement {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    //
    public o: number;
    public s: number;
    public h: number;
    public l: number;
    public c: number;
    public d: number;

    constructor (x: number = 0, y: number = 0, width: number = 1, height: number = 1) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // ʹ��ֵ
        this.o = Math.PI / 2 * (Math.random() * this.x - this.height / 2) / this.height;
        if (this.o === 0) {
            this.o = (Math.random() - 0.5) * Math.PI / 2;// �ָ��� -90 ~ +90
        }

        this.s = 2 * Math.PI * (Math.random() * this.y - this.width / 2) / this.width;
        if (this.s === 0) {
            this.s = (Math.random() - 0.5) * Math.PI
        }
        this.h = 0;

        // �仯ֵ
        this.l = 0.02 * _sign(this.s);// ��������ֵ��1, -1, 0, -0, NaN
        this.c = 0.02 * _sign(this.o);// ��������ֵ��1, -1, 0, -0, NaN
        this.c += _random(-0.005, 0.005);
        this.d = _random(2, 4);// �߳�
    }

    public render (ctx: any): void {
        let startX  = this.x + Math.cos(this.s) * this.h / 2;
        let startY  = this.y + Math.sin(this.s) * this.h / 2;
        let endX    = this.x + Math.cos(this.o) * this.h;
        let endY    = this.y + Math.sin(this.o) * this.h;
        ctx.moveTo(this.x, this.y);
        ctx.quadraticCurveTo(startX, startY, endX, endY);
    }

    public update (): void {
        this.o += this.c * 2;// ����2 ��Ϊ�� ��ʧ���
        this.s += this.l * 2;// ����2 ��Ϊ�� ��ʧ���
        this.h += Math.cos(this.o) * this.d;
    }
}
let _w = window;
let _b = document.body;// ����html dom�е�body�ڵ� ��<body>
let _d = document.documentElement;// ����html dom�е�root �ڵ� ��<html>

// screen helper
let _screenInfo: any = function (): any {
    let width: number = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0);
    let height: number = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0);
    let scrollx: number = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0);
    let scrolly: number = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);

    return {
        width: width,
        height: height,
        ratio: width / height,
        centerX: width / 2,
        centerY: height / 2,
        scrollX: scrollx,
        scrollY: scrolly
    };
};


export default class CanvasFactory {
    private _dom: any = null;// TODO ����Ӧ����ʲô���ͣ���
    private _canvas: any = null;
    private _context: any = null;

    constructor (dom: object = document.body) {// Ĭ����ӵ�body��
        this._dom = dom;// ��ֵ
        this._init();// ��ʼ��
        // ���canvas����������div������body����ô��Ҫ��֤��bodyͬʱ�ı�Ĵ�С��
        let _this = this;
        if (dom === document.body) {
            window.addEventListener('resize', function () {
                _this._windowResize();
            });
        }
    }
    // ����canvas
    private _init (): void {
        try {
            this._canvas = document.createElement('canvas');
            // this._canvas.style["display"] = "block";
            // this._canvas.style["position"] = "fixed";
            // this._canvas.style["margin"] = "0";
            // this._canvas.style["padding"] = "0";
            // this._canvas.style["border"] = "0";
            // this._canvas.style["outline"] = "0";
            // this._canvas.style["left"] = "0";
            // this._canvas.style["top"] = "0";
            let _domInfo: any = this._getDomInfo();
            this._canvas.width = _domInfo['width'];
            this._canvas.height = _domInfo['height'];
            // this._canvas.style["z-index"] = "-1";
            //this._canvas.style["background-color"] = "#ccc";
            this._canvas.id = "bgCanvas";

            this._context = this._canvas.getContext('2d');
            this._dom.appendChild(this._canvas);
        } catch (e) {
            console.warn("Canvas Context Error: " + e.toString());
            return;
        }
    }
    // ��ȡ��װcanvas�����ĸ��ڵ����ݣ��������
    private _getDomInfo (): object {
        let width = this._dom.offsetWidth;
        let height = this._dom.offsetHeight;
        return {
            width,
            height,
        };
    }
    // �洰�ڱ仯���任
    private _windowResize (): void {
        let _window: any = _screenInfo();
        let width: number = _window['width'];
        let height: number = _window['height'];
        this._canvas.width = width;
        this._canvas.height = height;
    }
    // �ṩ�ⲿ��ȡcanvasԪ��
    public getCanvas (): any {
        return this._canvas;
    }
    // �ṩ�ⲿʹ��canvas��������
    public getContext (): any {
        return this._context;
    }
}
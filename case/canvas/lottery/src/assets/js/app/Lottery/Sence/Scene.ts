export default abstract class Scene {
    protected can: any;
    protected ctx: any;
    protected canRect: any;

    protected constructor (options: any) {
        this.can = options.can;
        this.ctx = this.can.getContext('2d');
        this.canRect = this.can.getBoundingClientRect();
    }
}
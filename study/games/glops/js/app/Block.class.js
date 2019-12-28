/**
 * 标准键盘布局
 * ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 * │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 * └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 * │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 * │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 * │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 * ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 * │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 * ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 * │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 * └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 */


(function () {

    /**
     * 构造函数
     */
    let Block = window.Block = function (row, col, type) {
        // 传参
        this.row = row;
        this.col = col;
        this.type = type;
        // 通过自己的行号，列号，决定自己的x，y
        this.x = game.baseX + game.block_wh * this.col;
        this.y = game.baseY + game.block_wh * this.row;
        // 判断保证
        this.onBomb = false;
        // 爆炸帧
        this.bombStep = 0;
        // 自己是否在动
        this.onMove = false;
    };

    /**
     * update
     */
    Block.prototype.update = function () {
        if (this.onMove) {
            this.f++;
            if (this.f > this.duration) {
                this.onMove = false;
                return;
            }
            this.x += this.dX;
            this.y += this.dY;
        }
    };

    /**
     * render
     */
    Block.prototype.render = function () {
        // 没有爆炸
        if (!this.onBomb) {
            game.ctx.drawImage(game.blockImages[0], this.x, this.y, game.block_wh, game.block_wh);
        }
        // 爆炸动画
        else {
            // 自增
            game.frame % 40 === 0 && this.bombStep++;
            // 只爆炸一次
            if (this.bombStep > 9) {
                return;
            }
            game.ctx.drawImage(game.R["bomb"], 0, 111 * this.bombStep, 179, 111, this.x, this.y, game.block_wh, game.block_wh);
        }

    };

    /**
     * bomb
     */
    Block.prototype.bomb = function () {
        // 通过一个信号量，决定是图片还是爆炸特效
        this.onbomb = true;
    };

    /**
     *
     */
    Block.prototype.moveTo = function (targetRow, targetCol, duration) {
        // 开关
        this.onMove = true;
        // 计算目标x，y
        let targetX = game.baseX + game.block_wh * targetCol;
        let targetY = game.baseY + game.block_wh * targetRow;
        // 计算距离
        let distanceX = targetX - this.x;
        let distanceY = targetY - this.y;
        // 算出每帧距离
        this.dX = distanceX / duration;
        this.dY = distanceY / duration;
        //
        this.duration = duration;
        // 记录开始运动的时候，记录这一帧的编号，开始运动后++
        this.f = 0;


    }

}) (window);
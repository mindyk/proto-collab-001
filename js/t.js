function Tree (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;
    this.o = {};
    this.o.x = this.x;
    this.o.y = this.x;
    this.sprites = [ {x:0, y:0}, {x:60, y:0}, {x:60, y:60}, {x:0, y:60} ];
    this.key = Math.floor(Math.random() * 3) + 0;
    this.start = -1;

    this.draw = function (c2d) {
        var xy = this.sprites[0],
            w = 19,
            h = 31,
            scale = 3;
        c2d.drawImage(g.shadow, 0 ,0, 8, 4, this.x - g.x, this.y - g.y + h*scale - 15, w * scale  , 4);
        c2d.drawImage(this.img, xy.x,xy.y,w,h,this.x - g.x, this.y -g.y, w*scale, h*scale);

    };

    this.shake = function () {
        var duration = 500;
        if (this.start == -1) {
            this.start = Date.now();
        }
        var dt = Date.now() - this.start;
        if (dt > duration) {
            this.start = -1;
            this.x = this.o.x;
            this.y = this.o.y;
            return;
        }

        this.x -=1;
        this.y -=1;

        this.shake();
    }

}
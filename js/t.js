function Tree (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;

    this.w = 19;
    this.h = 31;

    this.cw = 22; // collsion width
    this.ch = 15; // collision hight
    this.cx = null; // collision x
    this.cy = null; // collision y

    this.name = 'tree';
    this.col = false;

    this.draw = function (c2d) {
        var xy = {x:0,y:0},
            w = 19,
            h = 31,
            scale = 3,
            x = this.x - g.x,
            y = this.y - g.y;
        c2d.drawImage(g.shadow, 0 ,0, 8, 4, x, y + h*scale - 15, w * scale  , 4);
        c2d.drawImage(this.img, xy.x,xy.y,w,h, x, y, w*scale, h*scale);

        // collision box
        this.cx = x +17;
        this.cy = y + h*scale - this.ch - 10;
        c2d.strokeStyle = 'green';
        if (this.col) {
            c2d.strokeStyle = 'red';
        }
        c2d.beginPath();
        c2d.rect(this.cx, this.cy, this.cw, this.ch);
        if (g.cb) {
            c2d.stroke();
        }
    };
}
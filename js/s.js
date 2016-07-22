function Stone (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;
    this.o = {};
    this.start = -1;
    this.name = 'stone';

    this.cw = 20; // collsion width
    this.ch = 15    ; // collision hight
    this.cx = null; // collision x
    this.cy = null; // collision y
    this.col = false;

    this.draw = function (c2d) {
        var w = 16,
            h = 16,
            scale = 2,
            x = this.x - g.x,
            y = this.y - g.y;
        this.vx = x;
        this.vy = y;
        c2d.drawImage(g.shadow, 0 ,0, 8, 4, this.x - g.x, this.y - g.y + h*scale -6     , w * scale  , 4);
        c2d.drawImage(this.img, 0,0,w,h,this.x -g.x,this.y -g.y, w*scale,h*scale);
        // collision box
        this.cx = x +5;
        this.cy = y +10  ;
        c2d.strokeStyle = 'green';
        if (this.col) {
            c2d.strokeStyle = 'red';
        }
        c2d.beginPath();
        c2d.rect(this.cx, this.cy, this.cw, this.ch);
        c2d.stroke();

    };

}
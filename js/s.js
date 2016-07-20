function Stone (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;
    this.o = {};
    this.start = -1;

    this.draw = function (c2d) {
        var w = 16,
            h = 16,
            scale = 2;
        c2d.drawImage(g.shadow, 0 ,0, 8, 4, this.x - g.x, this.y - g.y + h*scale -6     , w * scale  , 4);

        c2d.drawImage(this.img, 0,0,w,h,this.x -g.x,this.y -g.y, w*scale,h*scale);

    };

}
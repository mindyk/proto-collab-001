function Stone (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;
    this.o = {};
    this.start = -1;

    this.draw = function (c2d) {
        c2d.drawImage(this.img, 0,0,19,31,this.x,this.y, 38,62);
    };

}
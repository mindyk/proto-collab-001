function Grass (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;
    this.o = {};
    this.start = -1;
    this.name = 'grass';

    /**
     *
     * @param c2d
     * @param ox offset x
     * @param oy offset y
     */
    this.draw = function (c2d, ox, oy) {
        c2d.drawImage(this.img, 0,0,19,31,this.x - g.x + ox,this.y - g.y +oy, 38,62);
    };

}
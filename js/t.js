function Tree (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;
    this.sprites = [ {x:0, y:0}, {x:60, y:0}, {x:60, y:60}, {x:0, y:60} ]
    this.key = Math.floor(Math.random() * 3) + 0;

    this.draw = function (c2d) {
        var xy = this.sprites[this.key];
        c2d.drawImage(this.img, xy.x,xy.y,60,60,this.x,this.y, 60,60);
        //c2d.drawImage(this.img, 60,0,60,60,50,50, 60,60);
        //c2d.drawImage(this.img, 60,60,60,60,200,50, 60,60);
        //c2d.drawImage(this.img, 0,60,60,60,50,200, 60,60);
    }
}
function Tree (img) {
    this.img = img;
    this.x = Math.floor(Math.random() * 800) + 1;
    this.y = Math.floor(Math.random() * 600) + 1;

    this.w = 19;
    this.h = 31;
    this.scale = 3;

    this.cw = 22; // collsion width
    this.ch = 15; // collision hight
    this.cx = null; // collision x
    this.cy = null; // collision y

    this.name = 'tree';
    this.col = false;

    this.draw = function (c2d, ox, oy) {
        var xy = {x:0,y:0},
            w = 19,
            h = 31,
            scale = 3,
            x = this.x - g.x + ox,
            y = this.y - g.y + oy;
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

function Tile(x, y) {
    console.log('new tile');
    this.x = x;
    this.y = y;

    this.cTrees = Math.floor(Math.random() * 100) + 10;
    this.cGrass = Math.floor(Math.random() * 15) + 10;
    this.cStone = Math.floor(Math.random() * 15) + 5;


    this.draw = function(c2d) {
        // draw all objects
        for(var i = 0; i < this.o.length; i++) {
            var o = this.o[i];
            o.draw(c2d, this.x, this.y);
        }
    };

    this.gen = function() {
        var o = [];
        // trees
        var img = new Image();
        img.src = 'img/tree.png';
        for (var i = 0; i < this.cTrees; i++) {
            o.push(new Tree(img));
        }
        // grass
        var gImg = new Image();
        gImg.src = 'img/grass.png';
        for (var ig = 0; ig < this.cGrass; ig++) {
            o.push(new Grass(gImg));
        }
        // grass
        var sImg = new Image();
        sImg.src = 'img/stone.png';
        for (var is = 0; is < this.cStone; is++) {
            o.push(new Stone(sImg));
        }

        o.sort(function(a,b) {
            var ay = a.y + a.h * a.scale,
                by = b.y + b.h * a.scale;
            return ay - by;
        });
        return o;
    }

    this.o = this.gen();

}
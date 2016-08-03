// MINI MAP
mm = {
    x: 700,
    y:0,
    w:100,
    h:100,



    draw : function () {
        c2d.clearRect(mm.x, mm.y, mm.w, mm.h);
        c2d.beginPath();
        c2d.rect(mm.x, mm.y, mm.w, mm.h);
        c2d.stroke();
        c2d.fillStyle = 'red';
        c2d.fillRect(mm.x + p.x / 10, mm.y + p.y / 10   , 2,2);
        c2d.fillStyle = 'green';

        for (var it = 0; it < g.tiles.length; it++) {
            var tile = g.tiles[it];
            var o = g.tiles[it];
            c2d.fillRect(mm.x + o.x + tile.x / 10, mm.y + o.y + tile.y / 10, 2, 2);
        }
        c2d.fillStyle = 'white';
        c2d.fillText(Math.floor(g.x), 100, 25);
        c2d.fillText(Math.floor(g.y), 125, 25);
    }
};
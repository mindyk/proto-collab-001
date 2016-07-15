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
    }
};
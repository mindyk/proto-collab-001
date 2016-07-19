var el_canvas = document.getElementById('playground'),
    c2d = el_canvas.getContext("2d");

g = {
    x : 0,
    y : 0,
    d : [],

    init: function () {
        console.log('g.init');

        m.init();
        var img = new Image();
        img.src = 'img/trees_120x120.png';
        for (var i = 0; i < 10; i++) {
            g.d.push(new Tree(img));
        }
        var pImg = new Image();
            pImg.src = 'img/p.png';
        p.init(pImg);
        document.onmousemove = m.handle;
        document.onkeypress = p.handle;
        setInterval(g.update, 1000/60);
        requestAnimationFrame(g.draw);
    },

    update : function () {
        p.update();
    },

    draw : function () {
        c2d.clearRect(0,0,800,600);
        c2d.fillStyle = 'black';

        p.draw();


        for(var i = 0; i < g.d.length; i++) {
            var t = g.d[i];
            t.draw(c2d);
        }

        mm.draw();
        
        requestAnimationFrame(g.draw);
    }
};





g.init();
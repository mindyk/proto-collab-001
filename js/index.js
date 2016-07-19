var el_canvas = document.getElementById('playground'),
    c2d = el_canvas.getContext("2d");

g = {
    x : 0,
    y : 0,
    d : [],
    tick: 0,
    time : 12,
    stamp : null,

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

        g.stamp = Date.now();

        document.onmousemove = m.handle;
        document.onkeydown = p.keydown;
        document.onkeyup = p.keyup;
        setInterval(g.update, 1000/60);
        requestAnimationFrame(g.draw);
    },

    update : function () {
        g.tick += 1;

        if (g.tick % 20 == 0) {
            // time
            if (Date.now() - g.stamp > 1000) {
                g.time += 1;
                g.stamp = Date.now();
                if (g.time > 24) {
                    g.time = 1;
                }
            }
        }
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

        // time
        c2d.fillText(g.time, 25, 25);

        requestAnimationFrame(g.draw);
    }
};





g.init();
function title_worker() {
    var title_loop = 0;
    let title_tiles = [
        '0____',
        '_0___',
        '__0__',
        '___0_',
        '____0'
    ];

    function loop_title() {
        setTimeout(()=>{
            // Logic
            postMessage(title_tiles[title_loop]);
            if (title_loop < 4) {
                title_loop +=1;
            } else {
                title_loop = 0;
            }
            // Repeat
            loop_title();
        },350);
    };
    loop_title();
}

if(window!=self)
  title_worker();

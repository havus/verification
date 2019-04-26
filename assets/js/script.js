// function mediaQuery(x) {
//     if (x.matches) {
//         document.getElementById('main').classList.add("offset-4");
//         console.log("gak berubah");
//     } else {
//         console.log("berubah");
//     }
// }

// let x = window.matchMedia("(max-width: 700)");
// mediaQuery(x);
// x.addListener(mediaQuery);

// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 361px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least 500px
        // console.log("diatas 500");
        let x = document.getElementById('main');
        x.className = "main col-sm-4 offset-4";
    } else {
        // window width is less than 500px
        let x = document.getElementById('main');
        // console.log("dibawah 500");
        x.className = "main col-sm-4";
    }    
}
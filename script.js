function Random1 () {
    var myrandom=Math.round(Math.random()*2)

    if (myrandom==0)    { 
        var pic = "https://www.clker.com/cliparts/p/G/a/s/t/g/rock-md.png"
        document.getElementById('player1').src = pic.replace('50x50', '225x90');
        alert("ROCK");
        }
    else if (myrandom==1)
       { var pic = "https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png"
       document.getElementById('player1').src = pic.replace('50x50', '225x90');
        alert("PAPER");}
    else if (myrandom==2)
       { var pic = "https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"
       document.getElementById('player1').src = pic.replace('50x50', '225x90');
        alert("SCISSOR");}
    
}

function Random2 () {
    var myrandom=Math.round(Math.random()*2)

    if (myrandom==0)    { 
        var pic = "https://www.clker.com/cliparts/p/G/a/s/t/g/rock-md.png"
        document.getElementById('player2').src = pic.replace('50x50', '225x90');
        alert("ROCK");
        }
    else if (myrandom==1)
       { var pic = "https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png"
       document.getElementById('player2').src = pic.replace('50x50', '225x90');
        alert("PAPER");}
    else if (myrandom==2)
       { var pic = "https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"
       document.getElementById('player2').src = pic.replace('50x50', '225x90');
        alert("SCISSOR");}
    
}


function play0() {
  var audio = document.getElementById("audio0");
  audio.play();
}

function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
  }

  function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
  }

  function play3() {
    var audio = document.getElementById("audio3");
    audio.play();
  }

function Random1 () {
    var myrandom=Math.round(Math.random()*2)

    if (myrandom==0)    { 
        var pic = "https://www.clker.com/cliparts/p/G/a/s/t/g/rock-md.png"
        document.getElementById('player1').src = pic.replace('50x50', '225x90')
        play1();
        document.getElementById("button1").innerHTML="ROCK";
        }
    else if (myrandom==1)
       { var pic = "https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png"
       document.getElementById('player1').src = pic.replace('50x50', '225x90')
       play2();
       document.getElementById("button1").innerHTML="PAPER";
       }
    else if (myrandom==2)
       { var pic = "https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"
       document.getElementById('player1').src = pic.replace('50x50', '225x90')
       play3();
       document.getElementById("button1").innerHTML="SCISSOR";
        }
    
}

function Random2 () {
    var myrandom=Math.round(Math.random()*2)

    if (myrandom==0)    { 
        var pic = "https://www.clker.com/cliparts/p/G/a/s/t/g/rock-md.png"
        document.getElementById('player2').src = pic.replace('50x50', '225x90')
        play1();
        document.getElementById("button2").innerHTML="ROCK";
        
        }
    else if (myrandom==1)
       { var pic = "https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png"
       document.getElementById('player2').src = pic.replace('50x50', '225x90')
       play2();
       document.getElementById("button2").innerHTML="PAPER";
        }
    else if (myrandom==2)
       { var pic = "https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"
       document.getElementById('player2').src = pic.replace('50x50', '225x90')
       play3();
       document.getElementById("button2").innerHTML="SCISSOR";
        }
    
}

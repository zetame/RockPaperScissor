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

  function play4() {
    var audio = document.getElementById("audio4");
    audio.play();
  }

  function play5() {
    var audio = document.getElementById("audio5");
    audio.play();
  }

  function play6() {
    var audio = document.getElementById("audio6");
    audio.play();
  }

function Random1 () {
    var myrandom=Math.round(Math.random()*2)

    if (myrandom==0)    { 
        
        document.getElementById('player1').src = "rockx.jpg";
        play1();
        document.getElementById("button1").innerHTML="ROCK";
        }
    else if (myrandom==1)   { 
       
       document.getElementById('player1').src = "paperx.jpg";
       play2();
       document.getElementById("button1").innerHTML="PAPER";
       }
    else if (myrandom==2)    { 
      
       document.getElementById('player1').src = "scissorx.jpg";
       play3();
       document.getElementById("button1").innerHTML="SCISSOR";
        }
    
}

function Random2 () {
    var myrandom=Math.round(Math.random()*2)

    if (myrandom==0)    { 
        
        document.getElementById('player2').src = "rockx.jpg";
        play4();
        document.getElementById("button2").innerHTML="ROCK";
        
        }
    else if (myrandom==1)   { 
       document.getElementById('player2').src = "paperx.jpg";
       play5();
       document.getElementById("button2").innerHTML="PAPER";
        }
    else if (myrandom==2)   { 
       document.getElementById('player2').src = "scissorx.jpg";
       play6();
       document.getElementById("button2").innerHTML="SCISSOR";
        }
    
}

function resetGame () {

  location.reload();

}

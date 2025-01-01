function checkAnswers() {
        

    let score = 0;
    if (document.getElementById('correct1').checked) {
      score++;
    }

    if (document.getElementById('correct2').checked) {
      score++;
    }
    if (document.getElementById('correct3').checked) {
      score++;
    }
    if (document.getElementById('correct4').checked) {
      score++;
    }

       document.getElementById("green1").style.color = "green";
       document.getElementById("green2").style.color = "green";
       document.getElementById("green3").style.color = "green";
       document.getElementById("green4").style.color = "green";
       document.getElementById("green5").style.color = "green";

       document.getElementById("textArea").innerHTML = "You scored " + score + "!";
  }
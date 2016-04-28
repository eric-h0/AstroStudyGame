var correct       = new Audio("assets/music/correct.wav")
var incorrect     = new Audio("assets/music/incorrect.wav")
var wins          = 0;
var losses        = 0;
var timer         = 0;

$(document).ready(function(){
  $("#gamePanel").hide();

  $("#startButton").on("click", function(){
    promptQuestions();
    $(".topPanel").hide();
    $("#gamePanel").show();
    $(".dancingTrio").hide();
    $('html').css('background','url(assets/images/background.jpg)');


  }); //End of click function

  function promptQuestions(){
    document.querySelector("#results").innerHTML = "";
    var choiceArray = [];
    $("#choices").empty();
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    choiceArray=randomQuestion.answers
    answer = randomQuestion.correct
    document.querySelector("#question").innerHTML = randomQuestion.question;
    for (i=0; i<choiceArray.length; i++){
      $("#choices").append("<p><span id = q" + i + ">" + '<img id="placeholder" width="20" height="20" src="assets/images/star.jpeg" /> ' + choiceArray[i] + "</span></p>");
        $("#q" + i).click(function(){
        console.log(this);
        if (this.id[1] == randomQuestion.correct-1){
          correct.play();
          document.querySelector("#results").innerHTML = "You are correct!";
          wins++
          document.querySelector("#wins").innerHTML = "Correct: " + wins;
          setTimeout(go, 1000)
          function go(){
          promptQuestions();
          };
        }
        else{
          incorrect.play();
          document.querySelector("#results").innerHTML = "You are incorrect!";
          losses++
          document.querySelector("#losses").innerHTML = "Incorrect: " + losses;
          setTimeout(go, 1000)
          function go(){
          promptQuestions();
          };
        };
      });
    };
  }; 
});
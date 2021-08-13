buttoncolors = ["red", "blue", "green", "yellow"];
gamePattern = [];
var level = 0;
starts = false;
$(".start").click(function () {
  if (!starts) {
    $("#level-title").text(level);
    $(".start").text("Restart");
    nextSequence();
    starts = true;
  } else {
    $("#level-title").text("");
    $(".start").text("Start");
    startOver();
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  playsound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkanswer(userClickedPattern.length - 1);
});
function checkanswer(cuulevel) {
  if (gamePattern[cuulevel] === userClickedPattern[cuulevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  randomnumber = Math.floor(Math.random() * 4);
  randomChosenColour =
    buttoncolors[Math.floor(Math.random() * buttoncolors.length)];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playsound(randomChosenColour);
  level++;
  $("#level-title").text(level);
}
function playsound(key) {
  var audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// nextSequence()

function startOver() {
  level = 0;
  gamePattern = [];
  starts = false;
}
$(".flyer").hide();

$(".flyer-btn").click(function () {
  $(".flyer").toggle();
  if ($(".flyer-btn").text() == "How to play") {
    $(".flyer-btn").text("");
  } else {
    $(".flyer-btn").text("How to play");
  }
});

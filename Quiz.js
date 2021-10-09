class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    
    textSize(20);
    fill("brown");
    text("RESULT OF THE QUIZ",340,50);
    text(".............................................",320,65);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      var display_answers = 100;
      fill("purple");
      textSize(20);
      text("Note:Contestants who answered correct are highlightd in green.",500,500);

    }
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("green");
      else
        fill("red");
    }

      display_answers+=30;
      textSize(15);
      text(allPlayers[plr].name,x-25,y-25)
      text(allContestants[plr].name + ":" + allContestants[plr].answer,250,display_answers);
    }
    
  }



class Quiz {
  constructor(){

  }

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

    //write code to change the background color here

    background("black");

    fill("cyan");
    textSize(40);
    text("ⱤɆ₴ɄⱠ₮ Ø₣ ₮ⱧɆ QɄłⱫ",210, 40);

    Contestant.getContestantInfo();
   
    if(allContestants !== undefined)
      {

      
      debugger;
      
      var display_Answer = 230;

      fill("Blue");
      textSize(25);
      console.log("1");
      text("𝗧𝗵𝗲 𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗮𝗻𝘀 𝗶𝘀 𝗵𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝗲𝗱 𝗶𝗻 𝗴𝗿𝗲𝗲𝗻",130,180);

      for(var plr in allContestants)
      {
        debugger;
        var correctAns = "1";
        if (correctAns === allContestants[plr].answer){
            fill ("Green");
        console.log("2");
        }
       else{
          fill("Red");
          console.log("3");
        }
        display_Answer+=30;
        textSize(25);

        text (allContestants[plr].name + ":" + allContestants[plr].answer,250,display_Answer)

      }
    }

  

  }
}

class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Name");
    this.input2 = createInput("Correct Option No");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  

  display(){
    this.title.html("𝕎𝕖𝕣𝕖𝕨𝕠𝕝𝕗'𝕤 ℚ𝕦𝕚𝕫");
    this.title.position(350, 0);

    this.question.html("Question:- 𝕭𝖊𝖘𝖙 𝖒𝖔𝖇𝖎𝖑𝖊 𝖌𝖆𝖒𝖊 𝖎𝖓 𝖙𝖍𝖊 𝖜𝖔𝖗𝖑𝖉? " );
    this.question.position(150,80);
    this.option1.html("1: 𝖈𝖆𝖑𝖑 𝖔𝖋 𝖉𝖚𝖙𝖞 𝖒𝖔𝖇𝖎𝖑𝖊 " );
    this.option1.position(150, 120);
    this.option2.html("2: 𝖕𝖚𝖇𝖌 𝖒𝖔𝖇𝖎𝖑𝖊" );
    this.option2.position(150, 150);
    this.option3.html("3: 𝖋𝖗𝖊𝖊 𝖋𝖎𝖗𝖊 " );
    this.option3.position(150, 180);
    this.option4.html("4: 𝖈𝖑𝖆𝖘𝖍 𝖔𝖋 𝖈𝖑𝖆𝖓𝖘" );
    this.option4.position(150, 210);

    this.input1.position(150, 260);
    this.input2.position(350, 260);
    this.button.position(320, 330);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

  }

  hide()
  {
    //console.log("4")
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    //console.log("5")
  }

    
}

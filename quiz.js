class Quiz{
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
          var  contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
              var contestantCount 
              contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
           var question = new Question();
            question.display();
        }
    }

    display(){
      
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question: Which K-Pop band was the first to reach American billboard charts?");
        this.question.position(150,80);
        this.option1.html("EXO");
        this.option1.positon(150,100);
        this.option2.html("BLACKPINK");
        this.option2.position(150,120);
        this.option2.html("BTS");
        this.option2.position(150,140);

        this.input1.position(200, 100);
    }
}
var IMAGE_WIDTH = 64;
var IMAGE_HEIGHT = 64;
var BOARD_HEIGHT =550;
var BOARD_WIDTH =400;

var initialPhotos = 2;
var level = 1;

var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

var game = document.getElementById("game");

game.onclick = function f(){
    alert("You Lost!\n\n" +
    "Game Will Restart from level 1\n");
    level=1
    initialPhotos=2

removeChildren(theLeftSide);
removeChildren(theRightSide);

generatePhotos();
};


function generatePhotos() {
    document.getElementById("level").innerHTML = "Level " + level; 
    
    
    for (var i = 1; i <= initialPhotos; i++) {
      var anImg = document.createElement("img");
      var anImg1 = document.createElement("img");
    
      var randTop = Math.floor(Math.random() * (BOARD_HEIGHT- IMAGE_HEIGHT));

      var randLeft = Math.floor(Math.random() * (BOARD_WIDTH - IMAGE_WIDTH));
  
  
      anImg.src = "icon.png";
      anImg.style.top = randTop + "px"; 
      anImg.style.left = randLeft + "px";
      anImg1.src = "icon.png";
      anImg1.style.top = randTop + "px"; 
      anImg1.style.left = randLeft + "px";  

      theRightSide.appendChild(anImg);
      theLeftSide.appendChild(anImg1);

    }
  
    var randSide = Math.floor(Math.random() * 2);
if(randSide==0){
        theRightSide.removeChild(theRightSide.lastChild);

        theLeftSide.lastChild.onclick = function nextLevel(event) {
            event.stopPropagation();
            removeChildren(theLeftSide);
            removeChildren(theRightSide);
        
            level++;
        
            initialPhotos+=2;
        
            generatePhotos();
              };
} else{
    theLeftSide.removeChild(theLeftSide.lastChild);

    theRightSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        removeChildren(theLeftSide);
        removeChildren(theRightSide);
    
        level++;
    
        initialPhotos+=2;

        generatePhotos();
          };

}

  }
  function removeChildren(parentNode) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
  }

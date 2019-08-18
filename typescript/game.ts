var IMAGE_WIDTH : number = 64;
var IMAGE_HEIGHT: number = 64;
var BOARD_HEIGHT: number =550;
var BOARD_WIDTH: number =400;

var initialPhotos: number = 2;
var level: number = 1;

var theLeftSide : HTMLElement = getGuaranteed("leftSide");
var theRightSide : HTMLElement = getGuaranteed("rightSide");

var game: HTMLElement = getGuaranteed("game");


function getGuaranteed(id: string): HTMLElement {
    const el = document.getElementById(id);
    if (el == null) {
        throw new Error("Element #" + id + " not found.");
    }
    return el as HTMLElement;
}

game.onclick = function f(){
    alert("You Lost!\n\n" +
    "Game Will Restart from level 1\n");
    level=1
    initialPhotos=2

removeChildren(theLeftSide);
removeChildren(theRightSide);

generatePhotos();
};


function generatePhotos() :void {
    getGuaranteed("level").innerHTML = "Level " + level; 
    
    
    for (var i :number = 1; i <= initialPhotos; i++) {
      var anImg :HTMLImageElement= document.createElement("img");
      var anImg1 :HTMLImageElement = document.createElement("img");
    
      var randTop :number = Math.floor(Math.random() * (BOARD_HEIGHT- IMAGE_HEIGHT));

      var randLeft :number = Math.floor(Math.random() * (BOARD_WIDTH - IMAGE_WIDTH));
  
  
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
        if(theRightSide.lastChild)
        theRightSide.removeChild(theRightSide.lastChild);

        if(theLeftSide.lastChild)
        theLeftSide.lastChild.addEventListener("click", function nextLevel(event:Event) {
            event.stopPropagation();
            removeChildren(theLeftSide);
            removeChildren(theRightSide);
        
            level++;
        
            initialPhotos+=2;
        
            generatePhotos();
              });
}else{
    if(theLeftSide.lastChild)
    theLeftSide.removeChild(theLeftSide.lastChild);
    
    if(theLeftSide.lastChild)
    theLeftSide.lastChild.addEventListener( "click",function nextLevel(event:Event) {
        event.stopPropagation();
        removeChildren(theLeftSide);
        removeChildren(theRightSide);
    
        level++;
    
        initialPhotos+=2;

        generatePhotos();
          });


}

  }
  function removeChildren(parentNode:ChildNode) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
  }

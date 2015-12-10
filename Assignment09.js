/* 
91.461 Assignment No. 9: Mini Scrabble
By Charlie Sopiep, Umass Lowell Computer Science Student
Contact me at csopiep@gmail.com
Created on 11/23/15
Got most of the basic functions done, still need to add some additional things
like making the tiles sortable and not stackable.
 */

//No idea how to use JSON but I do know how to deal with arrays.
var Scrabble_Pieces = [
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"B", "value":3,  "amount":2},
  {"letter":"C", "value":3,  "amount":2},
  {"letter":"D", "value":2,  "amount":4},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"F", "value":4,  "amount":2},
  {"letter":"G", "value":2,  "amount":3},
  {"letter":"H", "value":4,  "amount":2},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"J", "value":8,  "amount":1},
  {"letter":"K", "value":5,  "amount":1},
  {"letter":"L", "value":1,  "amount":4},
  {"letter":"M", "value":3,  "amount":2},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"P", "value":3,  "amount":2},
  {"letter":"Q", "value":10, "amount":1},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"S", "value":1,  "amount":4},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"U", "value":1,  "amount":4},
  {"letter":"V", "value":4,  "amount":2},
  {"letter":"W", "value":4,  "amount":2},
  {"letter":"X", "value":8,  "amount":1},
  {"letter":"Y", "value":4,  "amount":2},
  {"letter":"Z", "value":10, "amount":1},
  {"letter":"_", "value":0,  "amount":2}
];

//Keeps track of the board
var board_slots = new Array(6);




$(document).ready(function() {
    
    GenerateTiles();
    
 $(".GameBoard").droppable({drop: tileDropped, out: tileRemoved});

});

/* Adds the letter contained in the array board_slots to a string.
   Changes the text of #Word with the string. */
function updateScrabbleWord()
{
    var newText = "";

  
    for (i = 0; i < board_slots.length; i++)
    {
        if (board_slots[i] !== undefined && board_slots[i].length > 0)
            newText += (board_slots[i]);
    }

    $("#Word").text(newText);
}

/*Checks if there is the same letter in the Scrabble_Pieces array and board_slots array
  Grabs the value from the letter found in the Scrable_pieces array and adds it to the score
  Also checks if there if there a tile occupying the double word space and
  doubles the score accordingly */
function updateScore()  
{
    var score = 0;
    var doubleWord = false;
 
    for (i = 0; i < board_slots.length; i++)
    {

        if (board_slots[i] !== undefined && board_slots[i].length > 0)
        
        {
            for (x = 0; x < Scrabble_Pieces.length; x++)
            {
                if (Scrabble_Pieces[x].letter === board_slots[i])                 
                    if(i === 3 || i === 6)
                    {
                         score += Scrabble_Pieces[x].value;
                        doubleWord = true;
                        
                    }
                    else
                        score += Scrabble_Pieces[x].value;
            }
        }
    }

  if(doubleWord === true)
  {
        score *= 2;
    }
    
  
    $("#Score").text(score);
}

/* Checks if a tile has been dropped onto one of the scrabble board
   Adds that letter onto the board_slots array for tracking 
   Updates both the Score and Word */
function tileDropped(event, ui)
{

    ui.draggable.position(
    {
        my: "center",
        at: "center",
        of: $(this)
    });
   
    board_slots[$(this).attr("id")] = ui.draggable.attr("alt");
    
    updateScore();
    updateScrabbleWord();
}

/* Checks if the tile has been removed from the scrabble board
   Pops it out of the board_slots array 
   Updates both the Score and Word */
function tileRemoved(event, ui)
{
    
    if(ui.draggable.attr("id") === board_slots[$(this).attr("id")])
    {
        board_slots[$(this).attr("id")] = "";
    }
    updateScore();
    updateScrabbleWord();
}

/* Creates tiles that spawn at the rack
   These tiles are made only draggable and snappable to the board pieces up top
   They are also resized to fit them 
   What letters are picked is determined by a simple randomizer */
function GenerateTiles(){
  var base_url = "images/Scrabble_Tile_";
  var random = 1;
  var piece = "<img class='pieces' id='piece" + i + "' src='"+ base_url + random +".jpg" + "'></img>";
  var char = "";
  
  for(var i = 0; i < 7; i++) {
    var loop = true;
    while(loop === true){
      random = Math.floor(Math.random() * 27);
       if(Scrabble_Pieces[random].amount !== 0) {
        loop = false;
        Scrabble_Pieces[random].amount--;
      }
    }
    
   mytile = base_url + Scrabble_Pieces[random].letter;
   var char = mytile.substring(21, 22);
piece = "<img class='pieces' id='" + char + "' src='" + mytile + ".jpg'" +"alt='"+ char +"'></img>";

    
     $("#Rack").append(piece);

    $(".pieces").css("left", -5).css("top", -138).css("position", "relative").css("width","85px");
    $(".pieces").draggable({snap: "#Board" ,snapMode: "inner"});
  }
}



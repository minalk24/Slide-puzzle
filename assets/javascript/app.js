
$("ul").append('<li class="Tile Tile9" style="visibility: hidden">9</li>');
var emptyObj = {};
emptyObj.initialValues = [
  {"row":0 , "column":0 , "value":1, "hidden":false},{"row":0 , "column":1 , "value":2, "hidden":false},
  {"row":0 , "column":2 , "value":3, "hidden":false},{"row":1 , "column":0 , "value":4, "hidden":false},
  {"row":1 , "column":1 , "value":5, "hidden":false},{"row":1 , "column":2 , "value":6, "hidden":false},
  {"row":2 , "column":0 , "value":7, "hidden":false},{"row":2 , "column":1 , "value":8, "hidden":false},
  {"row":2 , "column":2 , "value":9, "hidden":true}
];
emptyObj.isEmptyTileAvailAdjacent = false;
emptyObj.clickIndex = [];
emptyObj.emptyTiles = [];
emptyObj.clickedValue = 0;


    //initialize 
    initialze();

    //update Json
    function updateInitialValuesObject(){
        //chanage to 9
        var index = _.findIndex(emptyObj.initialValues, { 'row' : parseInt(emptyObj.clickIndex[0]), 'column' : parseInt(emptyObj.clickIndex[1])});
        emptyObj.initialValues[index] = {"row":parseInt(emptyObj.clickIndex[0]) , "column":parseInt(emptyObj.clickIndex[1]) , "value":9, "hidden":true};
        
        //chanage to 9
        var index = _.findIndex(emptyObj.initialValues, { 'row' : parseInt(emptyObj.emptyTiles[0]), 'column' : parseInt(emptyObj.emptyTiles[1])});
        emptyObj.initialValues[index] = {"row":parseInt(emptyObj.emptyTiles[0]) , "column":parseInt(emptyObj.emptyTiles[1]) , "value": parseInt(emptyObj.clickedValue), "hidden":false};
        
        console.log(JSON.stringify(emptyObj.initialValues));
      }
  
      function initialze() {
          $(".SlidingPuzzle li.Tile").bind( "click", function() {
  
              emptyObj.clickedValue = parseInt($(this).text());
              clickedArray = _.find(emptyObj.initialValues, {
                  'value': parseInt($(this).text())
              });
              emptyObj.clickIndex = [clickedArray.row, clickedArray.column];
  
              emptyObj.emptyTiles = [];
              emptyObj.emptyTiles = findEmptyTilePosition();
              returnedValueEmptyTile = CheckIfEmptyTilePresentNear();
              if (returnedValueEmptyTile == true) {
                  updateInitialValuesObject();
                  swapTiles();
              }
          });
      }
  

      function findEmptyTilePosition(){
        var emptyTilePos = _.find(emptyObj.initialValues, { 'value': 9 });
        return [emptyTilePos.row, emptyTilePos.column];
      }
      
      function CheckIfEmptyTilePresentNear(){
        console.log(emptyObj.clickIndex);
        //reinitialse before checking tile position
        emptyObj.isEmptyTileAvailAdjacent = false;
        
        //logic to check top and bottom
        //check top according to row number
        if(emptyObj.clickIndex[0] === 1 || emptyObj.clickIndex[0] === 2){
          returnedValue = checkTop();
          if(returnedValue == true){
            return true;
          }
        }
        //check bottom according to row number
        if(emptyObj.clickIndex[0] === 0 || emptyObj.clickIndex[0] === 1){
          returnedValue = checkBottom();
          if(returnedValue == true){
            return true;
          }
        }
        
        //logic to check left and right
        //check left according to row number
        if(emptyObj.clickIndex[1] === 1 || emptyObj.clickIndex[1] === 2){
          returnedValue = checkLeft();
          if(returnedValue == true){
            return true;
          }
        }
        //check right according to row number
        if(emptyObj.clickIndex[1] === 0 || emptyObj.clickIndex[1] === 1){
          returnedValue = checkRight();
          if(returnedValue == true){
            return true;
          }
        }
  
        return false;
      }
    
      function checkTop(){
        if( (emptyObj.clickIndex[0] - 1) === emptyObj.emptyTiles[0] && (emptyObj.clickIndex[1]) === emptyObj.emptyTiles[1]){
          emptyObj.isEmptyTileAvailAdjacent = true;
          return true;
        }
        else return false;
      }
    
      function checkBottom(){
        if( (emptyObj.clickIndex[0] + 1) === emptyObj.emptyTiles[0] && (emptyObj.clickIndex[1]) === emptyObj.emptyTiles[1]){
          emptyObj.isEmptyTileAvailAdjacent = true;
          return true;
        }
        else return false;
      }
    
      function checkLeft(){
        if( (emptyObj.clickIndex[1] - 1) === emptyObj.emptyTiles[1] && (emptyObj.clickIndex[0]) === emptyObj.emptyTiles[0]){
          emptyObj.isEmptyTileAvailAdjacent = true;
          return true;
        }
        else return false;
      }
    
      
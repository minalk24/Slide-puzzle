
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
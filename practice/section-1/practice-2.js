'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=new Array();
  var index=0;
  var collectionB=collectionB[0];
  for(var i=0;i<collectionA.length;i++){
    var temp=collectionA[i];
    for(var j=0;j<collectionB.length;j++){
      if(temp==collectionB[j]){
        result[index]=temp;
        index++;
      }
    }
  }
  return result;
}

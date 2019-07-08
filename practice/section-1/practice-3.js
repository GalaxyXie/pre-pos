'use strict';

function collectSameElements(collectionA, objectB) {
  var result=new Array();
  var index=0;
  var collectionB2=objectB.value;
  for(var i=0;i<collectionA.length;i++){
    var temp=collectionA[i];
    for(var j=0;j<collectionB2.length;j++){
      if(temp==collectionB2[j]){
        result[index]=temp;
        index++;
      }
    }
  }
  return result;
}

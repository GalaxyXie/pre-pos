'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var B=objectB.value;
  for (var i=0;i<collectionA.length;i++){
    for (var j=0;j<B.length;j++){
      if(collectionA[i].key==B[j]){
        var a=parseInt(collectionA[i].count/3);
        collectionA[i].count=collectionA[i].count-a;
        console.log(a);

      }
    }
  }
  console.log(collectionA);
  return collectionA;
}

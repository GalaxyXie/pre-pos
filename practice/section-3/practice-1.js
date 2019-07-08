'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var B=objectB.value;
  // var temp=new Object();
  for (var i=0;i<collectionA.length;i++){
    for (var j=0;j<B.length;j++){
      if(collectionA[i].key==B[j]){
        collectionA[i].count--;
      }
    }
  }
  console.log(collectionA);
  return collectionA;

}

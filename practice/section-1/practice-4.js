'use strict';

function collectSameElements(collectionA, objectB) {
  var A=new Array();
  var B=new Array();
  for (var i=0;i<collectionA.length;i++){
    A.push(collectionA[i].key);
  }
  B=objectB.value;
  var result=new Array();
  for (var i=0;i<A.length;i++)
  {
    for (var j=0;j<B.length;j++)
    {
      if(A[i]==B[j])
      {
        result.push(A[i]);
      }
    }
  }
  console.log(result);
  return result;
}

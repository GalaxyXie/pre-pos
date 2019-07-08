'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var C=new Array();
  var count=0;
  // var temp=new Object();
  for (var i=0;i<collectionA.length;i++){
    count=1;

    if(collectionA[i].length==1)
    {
      while (collectionA[i]==collectionA[i+1]&&i<collectionA.length-1){
        count++;
        i++;
      }
      var temp=new Object();
      temp.key=collectionA[i];
      temp.count=count;
      C.push(temp);
    }else{
      var key2=collectionA[i].substring(0,collectionA[i].indexOf("-"));
      var count2=collectionA[i].substring(collectionA[i].indexOf("-")+1);
      console.log(key2);
      console.log(count2);
      var temp=new Object();
      temp.key=key2;
      temp.count=parseInt(count2);
      C.push(temp);

    }
  }
  console.log(C);

  var B=objectB.value;
  for (var i=0;i<C.length;i++){
    for (var j=0;j<B.length;j++){
      if(C[i].key==B[j]){
        var a=parseInt(C[i].count/3);
        C[i].count=C[i].count-a;
        console.log(a);

      }
    }
  }
  console.log(C);
  return C;
}

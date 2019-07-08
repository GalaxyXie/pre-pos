'use strict';

function countSameElements(collection) {
  var result=new Array();
  var count=0;
 // var temp=new Object();
  for (var i=0;i<collection.length;i++){
    count=1;
    while(collection[i]==collection[i+1]&&i<collection.length-1){
      count++;
      i++;
    }
    var temp=new Object();
    temp.key=collection[i];
    temp.count=count;
    console.log(temp);
    result.push(temp);
  }
  console.log(result);
  return result;
}

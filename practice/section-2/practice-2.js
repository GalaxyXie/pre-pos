'use strict';

function countSameElements(collection) {
  var result=new Array();
  var count=0;
  // var temp=new Object();
  for (var i=0;i<collection.length;i++){
    count=1;

    if(collection[i].length==1)
    {
      while (collection[i]==collection[i+1]&&i<collection.length-1){
        count++;
        i++;
      }
      var temp=new Object();
      temp.key=collection[i];
      temp.count=count;
      result.push(temp);
    }else{
      var key2=collection[i].substring(0,collection[i].indexOf("-"));
      var count2=collection[i].substring(collection[i].indexOf("-")+1);
      console.log(key2);
      console.log(count2);
      var temp=new Object();
      temp.key=key2;
      temp.count=parseInt(count2);
      result.push(temp);

    }
  }
  console.log(result);
  return result;
}

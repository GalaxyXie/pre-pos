'use strict';

function countSameElements(collection) {
  var result=new Array();
  var r = /^\+?[1-9][0-9]*$/;　　//正整数s
  var count=0;
  var backup=collection.concat();
  for (var i = 0; i <collection.length ; i++) {
    if(collection[i].length!=1){
      collection[i]=collection[i].substring(0,1);
      console.log(collection[i]);
      backup[i]=parseInt(backup[i].match(/\d+/g));
      console.log(backup[i]);
    }
  }


  for (var i=0;i<collection.length;i++){
    if(r.test(backup[i])){
      count=backup[i];
    }else{
      count=1;
    }
    while(collection[i]==collection[i+1]&&i<collection.length-1){
      if(r.test(backup[i+1])){
        count+=backup[i+1];
      }else{
      count++;
      }
      i++;
    }
    var temp=new Object();
    temp.name=collection[i];
    temp.summary=count;
    console.log(temp);
    result.push(temp);
    count
  }
  console.log(result);
  return result;

}

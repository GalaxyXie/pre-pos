'use strict';

function countSameElements(collection) {
  var str = []; //字符数组
  var num = []; //对应数量
  //更新两个数组
  function update(tempStr,tempNum){
    if(str.indexOf(tempStr)===-1)
    {
      str.push(tempStr);
      num.push(tempNum);
    }
    else
    {
      var index = str.indexOf(tempStr);
      num[index]=num[index]+tempNum;
    }
  }
  //遍历原集合
  collection.forEach(function (value) {
    //单字符
    if(value.length===1)
    {
      update(value,1)
    }
    else
    {
      var tempStr = '';
      var tempNum = 0;
      //a[2]形式
      if(value.indexOf('[')!==-1)
      {
        tempStr = value.substring(0,value.indexOf('['));
        tempNum = parseInt(value.substring(value.indexOf('[')+1, value.indexOf(']')));
      }
      //a-2形式
      if(value.indexOf('-')!==-1)
      {
        tempStr = value.substring(0,value.indexOf('-'));
        tempNum = parseInt(value.substring(value.indexOf('-')+1));
      }
      //a:2形式
      if(value.indexOf(':')!==-1)
      {
        tempStr = value.substring(0,value.indexOf(':'));
        tempNum = parseInt(value.substring(value.indexOf(':')+1));
      }
      update(tempStr,tempNum)
    }
  });
  //保存为对象数组
  var result = [];
  for(var i=0;i<str.length;i++)
  {
    result.push({
      name:str[i],
      summary:num[i]
    })
  }
  console.log(result);
  return result;
}

'use strict';

function grouping_count(collection) {

  //在这里写入代码
   var arr = [];
  var obj={};
  for(var i=0;i<collection.length;i++){
    if(arr.indexOf(collection[i]) < 0){
      console.log(arr.indexOf(collection[i]));
      arr.push(collection[i]);
      obj[collection[i]]=0;
    }
  }
  for(var i=0;i<collection.length;i++){
     obj[collection[i]]++;
  }
  
  return obj;

}

module.exports = grouping_count;

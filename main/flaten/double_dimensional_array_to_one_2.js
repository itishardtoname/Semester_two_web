'use strict';

function double_to_one(collection) {

  //在这里写入代码
   var arr = [];
   for(var i in collection){
     if((typeof collection[i]) === "number" && arr.indexOf(collection[i]) < 0){
      arr.push(collection[i]);
     }else {
		       for(var j in collection[i]){
		         if((typeof collection[i][j]) === "number" && arr.indexOf(collection[i][j])<0){
		           arr.push(collection[i][j]);
		         }
		       }
     		}
   }
  return arr;
}

module.exports = double_to_one;

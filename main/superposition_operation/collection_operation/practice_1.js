'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var arr = collection.map((value,index) => value*3+2);

  var sum = arr.reduce((total,num) => total+num);

  return sum;
}

module.exports = hybrid_operation;


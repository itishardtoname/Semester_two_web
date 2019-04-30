'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var arr = [];
  arr = collection.filter(value => value % 2 !== 0);
 
  return arr.reduce((total,num) => total+num) / arr.length;


}

module.exports = average_uneven;

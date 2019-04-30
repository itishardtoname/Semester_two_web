'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = collection.reduce(function(total,num){
  	return total+num;
  });
  return sum/collection.length;
}

module.exports = compute_average;


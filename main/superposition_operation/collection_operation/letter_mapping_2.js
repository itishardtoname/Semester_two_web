'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = collection.reduce(function(total,num){
  	return total+num;
  });
  var result = Math.ceil(sum / collection.length);

  return String.fromCharCode(result + 96);
}

module.exports = average_to_letter;


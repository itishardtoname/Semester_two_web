'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var result =[] ;
   collection.forEach(function(value){
  	if(value % 2 === 0){
      result.push(value);
  		
  	}
  });
  return result.shift();
}

module.exports = find_first_even;


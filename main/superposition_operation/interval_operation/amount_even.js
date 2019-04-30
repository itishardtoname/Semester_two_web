'use strict';

function amount_even(collection) {

  //在这里写入代码
 	var arr = collection.filter(function(value){
 		if(value %2 ===0){
 			return value;
 		}
 	});

 	return arr.reduce((total,num) => total+num);
}

module.exports = amount_even;

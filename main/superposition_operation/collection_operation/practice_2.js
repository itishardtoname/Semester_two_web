'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var arr = [];
  collection.map(function(value,index){
  	if(value % 2 !== 0 ){
  		arr.push(value*3+2);
  	}
  });
  return arr;
}

module.exports = hybrid_operation_to_uneven;


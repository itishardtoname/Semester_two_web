'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var arr = [];
  collection.map(function(value,index){
  	if(value % 2 === 0){
  		arr.push( String.fromCharCode(value+96));
  	}
  });
  
  return arr;
}

module.exports = even_to_letter;

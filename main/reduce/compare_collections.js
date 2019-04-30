'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var count = 0;
  collection_a.map(function(value,index){
  	 if( collection_b.indexOf(value) >= 0){
  	 	count++;
  	 }
  });

  
  return count != collection_a.length ? false:true;
}

module.exports = compare_collections;



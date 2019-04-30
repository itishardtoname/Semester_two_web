'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let arr=[];
  for(var i=0;i<collection_b.length;i++){
  	if( collection_a.indexOf(collection_b[i]) > 0){
  		arr.push(collection_b[i]);
  	}
  }
 
  return arr;
}

module.exports = get_intersection;

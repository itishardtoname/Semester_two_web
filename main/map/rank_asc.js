'use strict';
var rank_asc = function(collection){
  return collection.sort( function(a,b){
  	     if(a > b){
  	     	return 1;
  	     }else if( a === b){
  	     	return 0;
  	     }else {
  	     	return -1;
  	     }
  }).reverse();
};

module.exports = rank_asc;

'use strict';
var rank_desc = function(collection){
  return collection.sort(function(a,b){
  	if(a>b){
  		return 1;
  	}else if(a<b){
  		return -1;
  	}else{
  		return 0;
  	}
  });
};

module.exports = rank_desc;

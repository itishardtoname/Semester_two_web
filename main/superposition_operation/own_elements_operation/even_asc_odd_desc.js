'use strict';
var even_asc_odd_desc = function(collection){
		var arr_o = collection.filter((value,index) =>  value % 2 === 0).sort(function(a,b){
      if(a > b){
        return 1;
      }else if(a === b){
        return 0;
      }else {
        return -1;
      }
    });
	var arr_j = collection.filter((value,index) => value % 2 !== 0).sort(function(a,b){
      if(a>b){
        return 1;
      }else if(a===b){
        return 0;
      }else{
        return -1;
      }
    }).reverse();

	return arr_o.concat(arr_j);
}

module.exports = even_asc_odd_desc;

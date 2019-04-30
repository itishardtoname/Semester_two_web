'use strict';
var calculate_median = function(collection){
	 var arr = [];
  	 arr = collection.filter(function(value,index){
  	    return (index+1) % 2 === 0;
  	 });
 	  return (arr.reduce((total,num) => total+num))/arr.length;
};
module.exports = calculate_median;

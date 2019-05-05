'use strict';
var is_exist_element = function(collection,element){
	let arr = collection.filter((value,index) => (index+1) % 2 === 0);
   if(arr.indexOf(element)>0){
     return false;
   }else{
     return true;
   }

};
module.exports = is_exist_element;

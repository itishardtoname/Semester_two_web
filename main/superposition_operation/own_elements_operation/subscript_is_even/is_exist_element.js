'use strict';
var is_exist_element = function(collection,element){
	var arr = [];
	arr = collection.filter((value,index) => (index+1) % 2===0 );

	if(arr.indexOf(element) > 0 ){
		return true;
	}else{
		return false;
	}//有错！！！！！
};
module.exports = is_exist_element;

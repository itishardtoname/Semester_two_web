'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if(number_a === number_b){
  	return [number_a];
  }else if(number_a < number_b){
  	return print(number_a,number_b);

  }else if(number_a > number_b){
  	return print(number_b,number_a).reverse();
  }
}

function print(a,b){
	let arr=[];
  	for(let i=a;i <= b;i++){
  		arr.push(i);
  	}
  	return arr;
}

module.exports = get_integer_interval;


'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  
   if(number_a === number_b){
  	return [String.fromCharCode(number_a+96)];
  }else if(number_a < number_b){
  	return print(number_a,number_b);

  }else if(number_a > number_b){
  	return print(number_b,number_a).reverse();
  }
}

function print(a,b){
	let arr=[];
  	for(let i=a;i <= b;i++){
  		arr.push(String.fromCharCode(i+96));
  	}
  console.log(arr);
  	return arr;
}

module.exports = get_letter_interval;

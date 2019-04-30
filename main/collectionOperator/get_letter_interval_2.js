'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr= ['t', 'u', 'v', 'w', 'x',
    'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
    'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
  ];
  if(number_a === number_b){	
  	return compare(number_a,number_b,arr);

  }else if(number_a < number_b){
  	return compare(number_a,number_b,arr);

  }else if(number_a > number_b){
  	return compare(number_b,number_a,arr).reverse();

  }

}

function compare(a,b,input){
   let arr=[];
   a-=20;
   b-=20;
   for(let i=a;i<=b;i++){
   		arr.push(input[i]);
   }
   return arr;
}


module.exports = get_letter_interval_2;


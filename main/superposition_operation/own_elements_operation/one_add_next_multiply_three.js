'use strict';
function one_add_next_multiply_three(collection){
//for..in 不能提前访问下一个
// forEach  map 好像都是？？？



	var arr =[];
  for(var i =0;i< collection.length-1 ;i++){
   
    arr.push( (collection[i] + collection[i+1])*3 );
  }
  return arr;
 
}
module.exports = one_add_next_multiply_three;

'use strict';
var single_element = function(collection){
	//用对象数组，自动按属性名排序了。。。。。
  var arr = collection.filter((value,index) => (index+1)%2 === 0);
  console.log(arr);
  arr.map(function(value,index){
    console.log(arr.indexOf(value));
    console.log(index);
    console.log('---');
    if(arr.indexOf(value) !==index ){
      while(arr.index(value === index)){
        arr.splice()
      }
    }
//  有问题！！！！
};
module.exports = single_element;

'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  let arr=[];
  arr[0]=collection[0];
  for(let i=1,t=0;i<collection.length;i++){
  	if(arr[t] !== collection[i]){
  		arr.push(collection[i]);
      t++;
  	}
  }
 return arr;
}

module.exports = choose_no_repeat_number;

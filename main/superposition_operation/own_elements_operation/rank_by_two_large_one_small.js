'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
    var arr = collection.sort(function(a,b){
    if(a > b){
      return 1;
    }else if(a === b){
      return 0;
    }else{
      return -1;
    }
  });
  console.log(arr);
  arr.map(function(value,index){
    if(index % 3 === 0 && arr[index]){
      console.log(index);
      arr.splice(index,1);
      arr.splice(index+2,0,value);
    
    }
  });
  
  return arr;
}//更改了输出样例
module.exports = rank_by_two_large_one_small;

'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
 var arr = collection.split("->").map(Number).sort(function(a,b){
    if(a > b){
      return 1;
    }else if(a === b){
      return 0;
    }else {
      return -1;
    }
  });

  if(arr.length % 2 !== 0){
    var temp = Math.floor(arr.length/2)+1;
    return arr[temp-1];
  }else{
    var temp = Math.floor(arr.length/2);
    return   (arr[temp-1]+arr[temp])/2;
  }
}

module.exports = compute_chain_median;

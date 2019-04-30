'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = number*10-interval*10;
  var arr = [];
  arr.push(number);
  do{
    number = (number*10-interval*10)/10;
    arr.push(number);
  }while(number >0);
  
  return arr;
}

module.exports = spilt_to_zero;

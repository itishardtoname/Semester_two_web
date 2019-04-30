'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
   var arr =[];
  collection.map(function(value,index){
  	 if(value % 2 !== 0){
       console.log(value);
       arr.push(value*3+5);
     }
  });


  return   arr.reduce((total,num) => total+num);
}

module.exports = hybrid_operation_to_uneven;


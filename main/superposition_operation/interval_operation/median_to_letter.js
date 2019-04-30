'use strict';

function median_to_letter(collection) {

  //在这里写入代码
 var a = Math.ceil((collection[collection.length/2-1]+collection[collection.length/2])/2); 
   if(a < 27){
     return String.fromCharCode(a);
   }else if(a >= 27){
     var str = 'a';
     a=a-26;
     return str += String.fromCharCode(a+96);
   }

}

module.exports = median_to_letter;

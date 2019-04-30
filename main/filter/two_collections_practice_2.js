'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
var arr = [];
 for(let i=0;i<collection_a.length;i++){
   
 	if(collection_b.indexOf(collection_a[i])<0){
      arr.push(collection_a[i]);
    }
 }
 return arr;
}

module.exports = choose_no_common_elements;

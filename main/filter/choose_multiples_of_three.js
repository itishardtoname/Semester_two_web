'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
   for(let i=0;i<collection.length;i++){
  	if(collection[i] % 3 !== 0){
  		collection.splice(i,1);
     	i--; 
  	}
    
  }
  return collection;
}

module.exports = choose_multiples_of_three;

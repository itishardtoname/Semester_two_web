'use strict';

function choose_even(collection) {

  //在这里写入代码
  for(let i in collection){
  	if(collection[i]%2 !== 0){
  		collection.splice(i,1);
  	}
  }
  return collection;
}

module.exports = choose_even;

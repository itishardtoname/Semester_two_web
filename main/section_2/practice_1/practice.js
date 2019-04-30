function count_same_elements(collection) {
  //在这里写入代码
  var obj = {};

  for(let i in collection){
  	obj[ collection[i] ] = 0;
  }
  for(let j in collection){
  	obj[ collection[j] ]++;
  }

  return obj;
}

module.exports = count_same_elements;

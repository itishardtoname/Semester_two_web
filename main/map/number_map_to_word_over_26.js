'use strict';
var number_map_to_word_over_26 = function(collection){
  var arr = [];
	for(var i in collection){
      if(collection[i]>26){
        var str='a';
        str += String.fromCharCode( collection[i]-26+96 );
        arr.push(str);
        
      }else{
        arr.push(String.fromCharCode(collection[i]+96));
      }
    }
   return arr;
};

module.exports = number_map_to_word_over_26;

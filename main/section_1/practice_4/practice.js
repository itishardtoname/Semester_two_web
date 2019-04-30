function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

      var arr = [];
	 for(let i=0;i<collection_a.length;i++){
	   
	 	if(object_b.value.indexOf(collection_a[i].key)>=0){
	      arr.push(collection_a[i].key);
	    }
	 }

	 return arr;
}

module.exports = collect_same_elements;

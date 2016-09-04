function forEach(array, cb){
	for (item of array){
		cb(item)
	}
}

function map(array,cb){
	let results = [];
	forEach(array, function(item){
		results.push(cb(item))
	})
	return results
}

function reduce(array, cb, init){
	if (!init){
		init=array[0]
		array = array.slice(1)
	}
	forEach(array, function(item){
		init = cb(init, item)
	})
	return init
}

function filter(array, filterFn){
	let results = [];
	forEach(array, function(item){
		filterFn(item)? results.push(item):null
	})
	return results
}

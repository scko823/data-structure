//stack is a last in first out data structure

function Stack(){
	this._storage = [];
}

Stack.prototype.push = function(object){
	this._storage.push(object)
}

Stack.prototype.pop = function(){
	return this._storage.pop()
}

Stack.prototype.size = function(){
	return this._storage.length
}

module.exports = Stack
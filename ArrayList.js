function ArrayList(){
	this.length=0;
	this._storage={}
}

ArrayList.prototype.push = function(value){
	this._storage[this.length] = value;
	this.length++
}

ArrayList.prototype.pop = function(){
	let result = this._storage[this.length-1]
	delete this._storage[this.length-1]
	this.length--
	return result
}

ArrayList.prototype.get = function(index){
	return this._storage[index]
}

ArrayList.prototype.delete = function(index){
	let result = this.get(index)
	for (let i=index+1;i<this.length;i++){
		this._storage[i-1] = this._storage[i]
	}
	delete this._storage[this.length-1];
	this.length--
	return result
}
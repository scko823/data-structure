//Queue is a First In First Out data structure

function Queue(){
	this.head = 0;
	this.tail = 0;
	this._storage={};
}

Queue.prototype.enqueue = function (object){
	this._storage[this.tail] = object
	this.tail++
	return this.tail
}

Queue.prototype.dequeue = function(){
	let result;
	if (this._storage[this.head]){
		result = this._storage[this.head]
		this.head++
	}
	return result
}

Queue.prototype.size = function(){
	return this.tail-this.head
}
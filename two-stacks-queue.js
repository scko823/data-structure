let Stack = require('./stack')
function StackQueue (){
	this._inbox = new Stack()
	this._outbox = new Stack()
}


StackQueue.prototype.enqueue = function(value){
	this._inbox.push(value)
}

StackQueue.prototype.dequeue = function(){
	let result;
	while(this._inbox.size()){
		this._outbox.push(this._inbox.pop())
	}
	result = this._outbox.pop();
	while(this._outbox.size()){
		this._inbox.push(this._outbox.pop())
	}
	return result
}

StackQueue.prototype.size = function(){
	return this._inbox.size() + this._outbox.size()
}

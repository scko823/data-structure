function Node(value) {
	this.value= value
	this.next = null
}

function LinkedList(){
	this.head = null
	this.tail = null
	this.length = 0
}

LinkedList.prototype.push= function(value){
	if (!this.head){
		this.head = new Node(value)
		this.tail = this.head
		this.length++
	}else{
		this.tail.next = new Node(value)
		this.tail = this.tail.next
		this.length++
	}
}

LinkedList.prototype.pop = function(){
	if (!this.head){
		return null
	}
	if (this.length===1){
		let value = this.head.value
		this.tail = null
		this.head = null
		this.length=0
		return value
	}
	let value = this.tail.value;

	let secondToLast = this._find((node)=>{
		return node.next === this.tail
	})
	this.tail = secondToLast
	this.length--
	return value
}

LinkedList.prototype._find = function(cb){
	let current = this.head
	while(current){
		if (cb(current)){
			return current
		}
		current = current.next
	}
	return null
}

LinkedList.prototype.get = function(index){
	let i=0
	let current=this.head
	while(i<index){
		current=current.next
		i++
	}
	return current.value
}

LinkedList.prototype.delete = function(index){
	if (index===0){
		let value = this.head.value;
		this.head = this.head.next
		this.length--
		return value
	}
	let i=0
	let current=this.head
	while(i<index-1){
		current=current.next
		i++
	}
	let previous = current
	let toBeDeleted = current.next
	let next = toBeDeleted.next
	previous.next = next
	this.length--
	return toBeDeleted.value

}
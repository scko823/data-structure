function Tree(){
	this.left = null
	this.right = null
	this.value = null
}

Tree.prototype.add = function(value) {
	if (!this.value){
		this.value = value
	}else if (value<this.value){
		if (!this.left){
			this.left = new Tree()
		}
		this.left.add(value)
	}else if (value>this.value){
		if (!this.right){
			this.right = new Tree()
		}
		this.right.add(value)
	}
};

Tree.prototype.search = function(value){
	if (this.value === value){
		return true
	}
	if (value<this.value){
		return !!this.left && this.left.search(value)
	}else if (value>this.value){
		return !!this.right && this.right.search(value)
	}
}
function Particle(dict) {
	this.init();

	for (var i in dict) {
		this[i] = dict[i];
	}
}

Particle.prototype.init = function() {
	var defaults = {
		x:0,
		y:0,
		render:{
			
		}
	}
}
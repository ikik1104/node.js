/**
 * http://usejsdoc.org/
 */


var com = {};

com.compare1 = function(a,b) {
	if(a<b){
		return b;
	}
}

com.compare2 = function(a,b) {
	if(a<b){
		return a;
	}
}

module.exports = com;
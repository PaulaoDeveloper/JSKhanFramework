self.onmessage = function(e){

	Function.prototype.Memorize = function() {
    const scope = this;
    let cache = {},
        key;
    	return (...args) => {
        	key = JSON.stringify(args);
       		 return cache[key] || (cache[key] = scope.call(null, ...args));
    	}
	};

	exports = {};
	self.importScripts('import.js');
	Require(e.data);
	var index = Object.keys(exports).map((v) => {
		return ""+v.toString()+"";
	});
	var valor = Object.values(exports).map((v) => {
		return v.toString();
	});
	const assets = {};
	index.forEach((v, i) => {
		assets[v] = valor[i];
	});
	/*
	var dtd = stringToUint(JSON.stringify());
	console.log(JSON.parse(uintToString(dtd)));
	var d = Math.random() * 1000;
	setCookie(d, dtd, 30);*/
	self.postMessage(assets);

};

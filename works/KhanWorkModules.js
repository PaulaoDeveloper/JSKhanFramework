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

	self.importScripts('import.js');
	Require(e.data);
	var assets = {};
	assets["data"] = {};
	Object.keys(module.exports).map((v, i) => {
		var ob = module.exports;
		if(typeof ob[v] == 'function'){
			assets["data"][v] = {data: ob[v].toString(),type: typeof ob[v]};
		}else{
			assets["data"][v] = {data: ob[v],type: typeof ob[v]};
		}
	});
	assets = JSON.stringify(assets["data"]);
	self.postMessage(assets);

};

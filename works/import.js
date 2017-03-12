var Require = function(m){

	const base_url = location.origin;
	m = base_url + '/' + m + '.js'.toString();
	importScripts(m);
	//return module.exports;

};

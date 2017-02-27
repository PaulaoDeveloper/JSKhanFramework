var Require = function(module){

	var path = location.href.split('work');
	self.importScripts(path[0] + module+'.js');
	return exports;

};

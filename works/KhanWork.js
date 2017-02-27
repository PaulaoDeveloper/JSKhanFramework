self.onmessage = function(e) {

    exports = {};
    self.importScripts('import.js');
    const Bar = Require('assets/js/bar');
    //Bar.ExibeNome('Paulao');

    var prs = [],
        frs = [],
        funcaobb;
    if (e.data.fu) {
        var params = e.data.fu.length;
        params = params > 0 ? e.data.fu.indexOf('(') : 0;
        var removeP = [];
        removeP.push(params);
        removeP = e.data.fu.indexOf(')') - removeP[0];
        if (params.length != 0) {
            params = e.data.fu.substr(-(e.data.fu.length - params - 1));
            params = params.substr(0, params.indexOf(')')).split(',');
            prs.push(params);
        }
        Fun = e.data.fu.replace('function', '').replace('{', '').replace('}', '').replace('(', '').replace(')', '').substr(removeP);
        frs.push(Fun);
    }
    if (frs.length > 0 && prs.length > 0 && e.data.action == "setContainer") {
        var funnn = [...prs, ...frs];
        funcaobb = Function.apply(null, funnn);
        //console.log(Fun = new Function(...prs[0], frs[0]));
    }

    function setContainer() {
        Container.Service = {
            name: e.data.name,
            action: funcaobb
        };
    }

    function getContainer() {
        console.log(Container.Service);
    }

    function getRunService() {
        console.log(Container.RunService);
    }

    function setRunService() {
        Container.RunService = {
            name: e.data.name,
            pr: e.data.parame
        };
    }
    switch (e.data.action) {
        case "setContainer":  setContainer();
            break;
        case "getContainer":  getContainer();
            break;
        case "getRunService": getRunService();
            break;
        case "setRunService": setRunService();
            break;
        default: getContainer();
    }
};
Function.prototype.Memorize = function() {
    const scope = this;
    let cache = {},
        key;
    return (...args) => {
        key = JSON.stringify(args);
        return cache[key] || (cache[key] = scope.call(null, ...args));
    }
};
const Container = {

    get Service() {
        return this.s;
    },
    set Service(name) {
        this.s[name.name] = name.action.Memorize();
    },
    get RunService() {
        return {
            Run: this.servicesRun,
            Process: Object.keys(this.servicesRun).length
        };
    },
    set RunService(obj) {
        var t1 = performance.now();
        if (obj.pr) {
            if (obj.pr.length > 0) {
                this.s[obj.name](...obj.pr);
            } else {
                this.s[obj.name]();
            }
        }
        var t2 = performance.now();
        this.servicesRun[obj.name] = {
            timeExecute: Math.abs(parseInt(t1) - parseInt(t2))
        };
    },
    s: {},
    time: [],
    servicesRun: {}

}

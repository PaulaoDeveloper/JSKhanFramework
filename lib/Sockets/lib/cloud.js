class Cloud {
    constructor(canal) {
        var CloudId = Math.floor(Math.random() * 100000);
        this.ifScopeCloud(CloudId);
        window.ScopeCloud[CloudId] = this;
        this.delayCount = 0;
        this.timeResponse = 0;
        this.url = window.location.origin + window.location.pathname + "lib/Sockets/lib/";
        this.JsonServer = "lib/Sockets/lib/jsondb.php";
        this.buffer = '';
        this.bufferAntig = '';
        this.row = 0;
        this.createSource(canal);
        this.eventsTrigger = [];
        setTimeout(() => {
            window.ScopeCloud[CloudId].eventPatterns()
        }, 1);
        setInterval(() => {
            if (window.ScopeCloud[CloudId].bufferAntig == '') {
                window.ScopeCloud[CloudId].delayCount++
            } else {
                window.ScopeCloud[CloudId].timeResponse = window.ScopeCloud[CloudId].delayCount + " ms";
                window.ScopeCloud[CloudId].delayCount = 0;
                window.ScopeCloud[CloudId].bufferAntig = ''
            }
        }, 1000)
    }
    ifScopeCloud(id) {
        if (!window.ScopeCloud) window.ScopeCloud = {};
        window.ScopeCloud[id] = ''
    }
    event(name, call) {
        this.eventsTrigger[name] = call
    }
    eventPatterns() {
        if (typeof this.eventsTrigger.connect == "function") {
            this.eventsTrigger.connect()
        }
        var ev = this;
        window.addEventListener("beforeunload", function(e) {
            ev.eventsTrigger.disconnect();
            var confirmationMessage = "\o/";
            e.returnValue = confirmationMessage;
            return confirmationMessage
        })
    }
    createSource(canal) {
        var $scope = this;
        this.source = new EventSource("lib/Sockets/lib/server.php?canal=" + canal + "&origin=" + window.location.origin + window.location.pathname + "views/data/");
        this.source.addEventListener('message', function(event) {
            if ($scope.row == 0 && $scope.buffer == '') {
                $scope.bufferAntig = event.data;
                $scope.buffer = event.data;
                $scope.row++;
                $scope.eventsTrigger.on(event.data)
            } else if ($scope.row > 0 && $scope.buffer != '') {
                var dataDecode = event.data,
                    pattern = $scope.buffer.toString().replace('[', '').replace(']', '') + ',',
                    d = dataDecode.replace(pattern, '');
                $scope.eventsTrigger.on(d);
                $scope.buffer = dataDecode
            }
        })
    }
}
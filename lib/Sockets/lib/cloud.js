class Cloud {

    constructor(canal) {
        window.ScopeCloud = this;
        this.buffer = '';
        this.row = 0;
        this.createSource(canal);
        this.eventsTrigger = [];
        setTimeout(() => {
            ScopeCloud.eventPatterns();
        }, 1);
    }

    event(name, call) {
        this.eventsTrigger[name] = call;
    }

    eventPatterns() {
        // EVENTO DE CONEXAO
        if (typeof this.eventsTrigger['connect'] == "function") {
            this.eventsTrigger['connect']();
        }
        // EVENTO DE DESCONEXAO
        var ev = this;
        window.addEventListener("beforeunload", function(e) {
            ev.eventsTrigger['disconnect']();
            var confirmationMessage = "\o/";
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        });
    }

    createSource(canal) {
        this.source = new EventSource('lib/server.php?canal=' + canal);
        this.source.addEventListener('message', function(event) {
            if (ScopeCloud.row == 0 && ScopeCloud.buffer == '') {
                ScopeCloud.buffer = event.data;
                ScopeCloud.row++;
                ScopeCloud.eventsTrigger["on"](event.data);
            } else if (ScopeCloud.row > 0 && ScopeCloud.buffer != '') {
                var dataDecode = event.data,
                    pattern = ScopeCloud.buffer.toString()
                    .replace('[', '')
                    .replace(']', '') + ',',
                    d = dataDecode.replace(pattern, '');
                ScopeCloud.eventsTrigger["on"](d);
                ScopeCloud.buffer = dataDecode;
            }
        });
    }

}
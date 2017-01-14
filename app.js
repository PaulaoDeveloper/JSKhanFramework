/* SISTEMA FEITO POR PAULAO */  
class Khan{

	constructor($app){
		this.app = $app;
		if(location.hash.length == 0){ location.href = '#/index'; }
			setTimeout(() => {
				if(document.querySelectorAll('[khan-model]').length > 0){
					this.ModelBind();
				}
			}, 1000);
	}

	ModelBind(){
		document.querySelectorAll('[khan-model]').forEach((v) => {
			v.setAttribute('onkeyup','new Khan().ViewBind(this)');
		});
	}

	ViewBind($bind){
		if(document.querySelector('[khan-view="'+$bind.getAttribute('khan-model')+'"]').nodeName == 'INPUT'){
			document.querySelector('[khan-view="'+$bind.getAttribute('khan-model')+'"]').
			value = $bind.value
		}else{
			document.querySelector('[khan-view="'+$bind.getAttribute('khan-model')+'"]').
			innerHTML = $bind.value;
		}
	}

	GetView(){
		return document.querySelector('[khan-app]').getAttribute('khan-app');
	}

	/* REQUESTS */
	Request($page, $d, $callback = function(){}){
		var $request = new XMLHttpRequest();
		var $posts = '';
		var $dataKeys = Object.keys($d),
			$dataValues = Object.values($d),
			$dataPostArr = '';
		$dataKeys.forEach((val, index) => {
			if((index + 1) < $dataKeys.length){
				$dataPostArr += val+'='+$dataValues[index]+'&';
			}else if((index + 1) == $dataKeys.length){
				$dataPostArr += val+'='+$dataValues[index];
			}
		});
		$request.onreadystatechange = () => {
			if (this.readyState == 4 && this.status == 200) {
     		 	$callback(this.textReponse);
    		}
		}
  		$request.open("POST", $page, true);
  		$request.send($dataPostArr); 
	}

	/* SISTEM ROUTES */

	Routes($name = 'index', $callback = function(){}){
		$name = $name.toString().split('/');
		if(this.GetUri().All()[0] == $name[1] && this.GetUri().All().length > 0){
			$callback(this.getParameters(this.postParameters($name), $name));
		} else if(location.hash == "#/"){
			location.href = location.hash+'index';
		}
	}

	GetUri(){
		return {
			All: () => {
				var r = (location.hash.length > 0) ? location.hash.split('/') : ['#','index'];
				delete r[0];
				return r.filter((val) => {
					return val != 'undefined';
				});
			},
			Filter: ($string) => {
				$string = $string.replace(/(<([^>]+)>)/ig,"");
				$string = $string.replace(/<\/?[^>]+(>|$)/g, "");
				return $string;
			}
		}
	}

	getParameters($url, $uris){
		this.Params = new Object();
		var arr = Object.values($url),
			ures = [];
		$uris.forEach((val) => {
			ures.push(val);
		});
		arr.forEach((val) => {
			this.Params[ures[val].replace(':','')] = (isNaN(this.GetUri().All()[val])) ? this.GetUri().Filter(this.GetUri().All()[val]) : parseInt(this.GetUri().All()[val]);
		});
		return this.Params;
	}

	postParameters($url){
		delete $url[0];
		$url = $url.filter((val) => {
			return val != 'undefined';
		});
		var achados = [];
		$url.forEach((val, index) => {
			if(val.indexOf(':') != -1){ achados.push(index); }
		});
		return achados;
	}

	/* RENDERIZA O HTML COM JS */

	DomRender($code){
		return (document.querySelectorAll(`[khan-app='${this.app}']`).length > 0) ? document.querySelector(`[khan-app='${this.app}']`).innerHTML += $code : this.Log('Erro ! Não Existe a View "'+this.app+'"');
	}

	PageRender($page, $callback = () => {}){
		var $request = new XMLHttpRequest();
		$request.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
     		 	$callback(this.responseText);
    		}
  		};
  		$request.open("GET", $page, true);
  		$request.send();
	}

	/* CONSOLE LOG */

	Log($string){
		console.log($string);
	}

}
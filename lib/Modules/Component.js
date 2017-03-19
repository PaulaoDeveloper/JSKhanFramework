"use strict";
class KhanTemplate extends HTMLElement {

   constructor() {
       super();
   }

   createdCallback() {

   		this.styleCss();

   }

   Compress(c){

   	c = c.replace(/\n/g,'');
   	c = c.replace(/\r/g,'');
   	c = c.replace(/\t/g,'');
   	c = c.trim();
   	return c;

   }

   Render(view = {}){

   		var templateString = this.Compress(this.Code).length;
   		var verif = sessionStorage.getItem(templateString);
   		var cache = (verif != null) ? true : false;
   		if(cache){
   			console.log("Chamou Cache !!");
   			this.Code = sessionStorage.getItem(templateString);
   		}else{
   			this.RenderInit(view);
   		}

   }

   RenderInit(v){

   	var self = this;
   	var viewCode = {
   		scope: self,
   		code: self.Code,
   		view: v
   	};
   	var con = this.RenderConverte.bind(viewCode);
   	con();

   }

   RenderConverte(){

   		var templateString = this.code;
   		var ori = this.scope.Compress(templateString).length;
   		Object.keys(this.view).forEach((v) => {
   			var reg = new RegExp("{{"+v+"}}","g");
            templateString = templateString.replace(reg, this.view[v]);
   		});
   		this.scope.Code = templateString;
   		sessionStorage.setItem(ori, templateString);

   }

   set Code(c){

  		this.innerHTML = c;

   }

   get Code(){

   		return this.innerHTML;

   }

   styleCss(){

   		document.body.style.margin = '0px';
   		document.body.style.margin = '0px';
   		this.style.width = "100%";
   		this.style.height = "auto";
   		this.style.padding = '0px';
   		this.style.margin = '0px';

   }

   CachePage(_page, view) {

        if(sessionStorage.getItem(_page)) {

        	this.Code = window.atob(sessionStorage.getItem(_page));
            this.Render(view);
            return false;

        } else {

            return true;

        }

    }

   SetRenderPage($page, code, view){

   		sessionStorage.setItem($page, window.btoa(code));
        this.Render(view);

   }

   PageRender(p, v){
   	var self = this;
   	if(self.CachePage(p, v)){
    		var $request = new XMLHttpRequest();
    		$request.onreadystatechange = function() {
        		if ($request.readyState == 4 && this.status == 200) {
        			console.log(this.responseText);
            		self.SetRenderPage(p, self.Compress(this.responseText), v);
        		}
    		};
    		$request.open("GET", p, true);
    		$request.send();
    	}
   }

}

document.registerElement('template-khan', KhanTemplate);

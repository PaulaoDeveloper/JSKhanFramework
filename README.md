# JSKhanFramework Javascript V1  ![alt text](http://brg4pafj.apps.lair.io/assets/images/icone.ico "Logo JSKHAN")
__________________________________________________________

  1. Baixe o [Zip](https://codeload.github.com/PauloSergioRomaoJunior/JSKhan/zip/master) Do Projeto
  2. Extraia o Arquivo Zip Sua Hospedagem
   * Xampp: HTDOCS
   * Wamp: WWW
  3. Acesse a Index Que Contem Os Passos Para Usar O JSKhan
  
__________________________________________________________

Sempre incluir os arquivo : **app.js**

__________________________________________________________
## Page HTML Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Page Example</title>
</head>
<body>
    <div khan-app="app"></div>
	  <script type="text/javascript" src="app.js" assync></script>
</body>
</html>
```
__________________________________________________________
## Page JSKhan.init.js Example
```javascript
// Iniciando O Frame
const app = new Khan('app');

// DEFINIDO ROTA PARA INDEX SEM NENHUM PARAMETRO
app.Routes('/index', () => {
  // RENDERIZA HTML NA ROTA
  app.DomRender(`<h1>Pagina index</h1>`);
});

// DEFINIDO ROTA PARA USER COM PARAMETRO id
app.Routes('/user/:id' , (req) => {
    console.log(req.id); // Recupera o Parametro id da Url
    app.PageRender('views/pagina.html', (code) => {
        app.DomRender(code); // renderiza um codigo html externo
    }
});

// DEFININDO ROTA PARA MODEL E QUANDO O VALOR DO MODEL FOR MODIFICADO TAMBEM MODIFICA NO VIEW
app.Routes('/model', () => {
		app.DomRender(`
			<input type="text" khan-model="texto" placeholder="Model e View 1 Com Inputs"/><br/>
			<input type="text" khan-view="texto" placeholder="Model e View 1 Com Inputs"/>
		`);
```
__________________________________________________________

## Contato
__________________________________________________________
[Facebook](http://facebook.com/PauloRodriguesYT) | [Google Plus](https://plus.google.com/108514517889295797166) | [WhatsApp Grupo](https://chat.whatsapp.com/0BVQ8R1AjeRA056eKKU1ZF)
------------ | ------------- | -------------

__________________________________________________________

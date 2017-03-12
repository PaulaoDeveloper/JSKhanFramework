# JSKhanFramework Javascript V1  ![alt text](https://s-media-cache-ak0.pinimg.com/236x/f0/5b/91/f05b9167a3c744c96012d273b5807ab7.jpg "Logo JSKHAN")
__________________________________________________________

  1. Baixe o [Zip](https://codeload.github.com/PauloSergioRomaoJunior/JSKhanFramework/zip/master) Do Projeto
  2. Extraia o Arquivo Zip Sua Hospedagem
   * Xampp: HTDOCS
   * Wamp: WWW
  3. Acesse a Index Que Contem Os Passos Para Usar O JSKhan
  
__________________________________________________________

Sempre incluir os arquivo : **app.js ou app.min.js**

__________________________________________________________
## CDNS
```html
    <script type="text/javascript" src="https://cdn.rawgit.com/PauloSergioRomaoJunior/JSKhanFramework/master/scripts/app.min.js?version=1.0.1"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/PauloSergioRomaoJunior/JSKhanFramework/master/lib/Routes/route.js?version=1.0.1"></script>
```

__________________________________________________________
## Pagina html basica para rodar o Framework
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Page Example</title>
</head>
<body>
    <div khan-app="app"></div>
    <script type="text/javascript" src="JSKhan/scripts/app.min.js?version=1.0.1"></script>
    <script type="text/javascript" src="JSKhan/lib/Routes/route.js?version=1.0.1"></script>
</body>
</html>
```
__________________________________________________________
## Funçoes Basicas Do Framework
```html
<script type="text/javascript">
```
```javascript

        // new Khan(' nome do khan-app ');
        const app = new Khan('app');
        // ROUTE 1 INDEX
        app.Routes('/index', () => {
            app.PageRender('views/index.html', (c) => {
                app.DomRender(c);
            });
        });
        // ROUTE 2
        app.Routes('/page/:id', ($request) => {
            app.PageRender(`views/page-${$request.id}.html`, (code) => {
                app.DomRender(code);
            });
            app.DomRender(`<h1> Pagina ${$request.id}</h1>`);
        });

```
```html
</script>
```
__________________________________________________________

## Contato
__________________________________________________________
[Facebook](http://facebook.com/PauloRodriguesYT) | [Google Plus](https://plus.google.com/108514517889295797166) | [WhatsApp Grupo](https://chat.whatsapp.com/0BVQ8R1AjeRA056eKKU1ZF)
------------ | ------------- | -------------

__________________________________________________________

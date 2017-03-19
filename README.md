# JSKhanFramework Javascript  
__________________________________________________________
> ![alt text](https://s-media-cache-ak0.pinimg.com/originals/1f/e8/00/1fe800748f1c9bafd70488f1062e76f1.gif "Logo JSKHAN")  
__________________________________________________________
**-  Auta Performance**  ![Imgur](http://i.imgur.com/bitkP5R.png) | **- Facil De Usar**  ![enter image description here](http://i.imgur.com/HmOUCyS.png) | **- Estrutura MVC** ![enter image description here](http://i.imgur.com/96rZV6k.png)
------------ | ------------- | -------------

__________________________________________________________

  1. Baixe o [Zip](https://codeload.github.com/PauloSergioRomaoJunior/JSKhanFramework/zip/master) Do Projeto
  2. Extraia o Arquivo Zip Sua Hospedagem
   * Xampp:  /htdocs/
   * Wamp:  /www/
   * Apache:  /public_html/
  3. Acesse a Url do Projeto no Navegador
  
__________________________________________________________

Sempre incluir os arquivo : **app.js ou app.min.js**

__________________________________________________________
## CDNS
```html
    
    - Min File
    <script type="text/javascript" src="https://cdn.rawgit.com/PauloSergioRomaoJunior/JSKhanFramework/master/scripts/app.min.js?version=1.0.1"></script>
    
    - Origin File
    <script type="text/javascript" src="https://cdn.rawgit.com/PauloSergioRomaoJunior/JSKhanFramework/master/scripts/app.js?version=1.0.1"></script>
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
    <template-khan></template-khan>
    <script type="text/javascript" src="JSKhan/scripts/app.min.js?version=1.0.1"></script>
</body>
</html>
```
__________________________________________________________
## Funçoes Basicas Do Framework
```javascript
<script type="text/javascript">
        // new Khan(' nome do khan-app ');
        const App = new Khan('app'),
        const Template = $("template");
        // ROUTE 1 INDEX
        App.Controller('indexController', function($scope){
            Template.PageRender('views/index.html', $scope.View);
        });
        // Sistema de Rotas
        App.Router('/page/:id', ($request) => {
            Template.PageRender(`views/page-${$request.id}.html`, {});
            Template.Code = `<h1> Pagina ${$request.id}</h1>`;
        });
        
</script>
```
__________________________________________________________

## Contato
__________________________________________________________
[Facebook](http://facebook.com/PauloRodriguesYT) | [Google Plus](https://plus.google.com/108514517889295797166) | [WhatsApp Grupo](https://chat.whatsapp.com/0BVQ8R1AjeRA056eKKU1ZF)
------------ | ------------- | -------------

__________________________________________________________

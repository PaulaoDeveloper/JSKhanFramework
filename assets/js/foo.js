exports.foo = function(nome, idade){
	console.log('Foo js Chamado Por : '+ nome + ' ele tem '+ idade);
};

exports.calculadora = function(n1 , simb, n2){
	switch (simb) {
                case "+":
                    return n1 + n2;
                    break;
                case "-":
                    return n1 - n2;
                    break;
                case "*":
                    return n1 * n2;
                    break;
                case "/":
                    return n1 / n2;
                    break;
                default:
                    return n1 + n2;
    }
};

exports.marmita = function(){
	console.log('Hora do Almoço');
};

exports.encripty = function(str){
	var hash = CryptoJS.SHA256(str);
    const cryptado = hash.toString(CryptoJS.enc.Base64);
    return cryptado;
};

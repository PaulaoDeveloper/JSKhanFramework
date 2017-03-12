<?php  
	
	include('config/db.php');
	include('conecta.php');

	$dbconfig = array(
		"host" => HOST,
		"port" => PORT,
		"dbname" => DBNAME,
		"name" => USER,
		"password" => PASSWORD
	);

	$conexao = new Database($dbconfig);
	$inseri = $conexao->conn->prepare('INSERT INTO sockets(name, data, date_create) VALUES (:nome, :data, :date_create)');
	$inseri->bindValue(":nome", $_POST['name']);
	$inseri->bindValue(":data", $_POST['data']);
	$inseri->bindValue(":date_create", Date('m-d-Y'));
	$inseri->execute();
	
	echo "Socket Enviado Com Sucesso!";

?>
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
	$rem = $conexao->conn->prepare('DELETE FROM sockets WHERE data=:d');
	$rem->bindValue(":d", $_POST['data']);
	$rem->execute();
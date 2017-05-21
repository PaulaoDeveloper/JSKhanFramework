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
	$inseri = $conexao->conn->prepare('SELECT * FROM sockets WHERE name=:nome');
	$inseri->bindValue(":nome", $_POST['name']);
	$inseri->execute();
	$data = array();
	foreach ($inseri->fetchAll(PDO::FETCH_ASSOC) as $key => $value) {
		$data[] = $value["data"];
	}
	echo json_encode($data);

?>
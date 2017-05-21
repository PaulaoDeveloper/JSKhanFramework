<?php  

	require 'vendor/autoload.php';
	require 'lib/jsondb.php';

	$database = new JsonDB($_POST['canal']);
	
	$database->insert(array(
		"nome" => $_POST['nome'],
		"idade" => $_POST['idade']
	));
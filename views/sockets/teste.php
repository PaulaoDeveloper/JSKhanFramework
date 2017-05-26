<?php

	require "../../lib/Sockets/lib/jsondb.php";

	$db = new JsonDB("api-youtube");

	$db->insert(array(
		"dispositivo" => $_POST['Dispositivo'],
		"id" => $_POST['id'],
		"date-create" => date("h-i-s")
	));
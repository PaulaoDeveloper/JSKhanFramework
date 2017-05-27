<?php

	require "../../lib/Sockets/lib/jsondb.php";

	$db = new JsonDB("api-youtube-commands-cloud");

	$db->insert(array(
		"date" => $_POST['date'],
		"id" => $_POST['id'],
		"type" => $_POST['type'],
		"value" => $_POST['value']
	));
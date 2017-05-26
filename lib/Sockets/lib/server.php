<?php

	set_time_limit(0);
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	require '../vendor/autoload.php';
	require 'jsondb.php';

	use Igorw\EventSource\Stream;
	$stream = new Stream();
    $baseUrl = '../../../views/sockets/data/';

	if(file_exists($baseUrl.$_GET['canal'].'.json')){ 
		$buffer = file_get_contents($baseUrl.$_GET['canal'].'.json'); 
	}
	$row = 0;

	while (true) {
    	if(isset($_GET['canal']) && isset($buffer)){
    		$newBuffer = file_get_contents($baseUrl.$_GET['canal'].'.json');
    		if($row == 0){
    			$stream->event()
               	   	   ->setData($buffer)
        	   	       ->end()
        	   	   	   ->flush();
        	   	$row++;
    		} elseif($buffer != $newBuffer && $row > 0){
    			$stream->event()
               	   	   ->setData($newBuffer)
        	   	       ->end()
        	   	   	   ->flush();
        	   	$row++;
        	   	$buffer = $newBuffer;
    		}
        }	
    	sleep(1.5);
	}
<?php

	class JsonDB{

		private $dbActive = '';
		private $findActive = '';

		public function __construct($db){

			if(!$this->existsDB()){ $this->createTable(); }
			$this->existsDir();
			$this->dbActive = "data/{$db}.json";

		}

		private function existsDir(){

			if(!file_exists('data/')){
				mkdir('data/');
			}

		}

		public function existsDB(){

			if(!file_exists($this->dbActive)){
				return false;
			}else{
				return true;
			}

		}

		public function createTable(){

			if(!file_exists($this->dbActive)){
				file_put_contents($this->dbActive, json_encode(array()));
			}

		}

		public function unserial(){

			$buffer = json_decode(file_get_contents($this->dbActive));
			$new = array();
			foreach($buffer as $d){
				$new[] = (array) $d;
			}
			return $new;
			// $new = array();
			// foreach ($buffer as $key => $value) {
			// 	$new[$key] = (array) json_decode($value);
			// }
			// return $new;

		}

		public function remove(){

			$dBuffer = $this->unserial();
			$achado = '';
			foreach($dBuffer as $key => $value){
				if(json_encode($value) == json_encode($d[$this->findActive])){ 
					$achado = true;
					unset($dBuffer[$key]);
				}
			}
			if($achado){
				$d = array();
				foreach($dBuffer as $k){
					array_push($d, $k);
				}
				file_put_contents($this->dbActive, json_encode($d));
			}

		}

		public function update($new){

			$d = $this->unserial();
			$d[$this->findActive] = $new;
			$newArray = array();
			foreach ($d as $value) {
				array_push($newArray, $value);
			}
			file_put_contents($this->dbActive, json_encode($newArray));

		}

		public function find($data){

			//$triggers = array();
			$d = $this->unserial();
			foreach($d as $key => $value){
				if(json_encode($data) == json_encode($value)){ 
					$this->findActive = (string) $key;
					return $this;  
				}
			}

		}

		public function insert($data){

			$dBuffer = $this->unserial();
			if(!in_array($data, $dBuffer)){
				array_push($dBuffer, $data);
				print_r($dBuffer);
				file_put_contents($this->dbActive, json_encode($dBuffer));
			}

		}

	}
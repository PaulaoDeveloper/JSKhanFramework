<?php  
	/**
	* 
	*/
	class Database{

		protected static $host;
		protected static $dbname;
		protected static $port;
		protected static $name;
		protected static $password;
		public static $pdo;

		public function __construct($db){

			self::$host = $db["host"];
			self::$dbname = $db["dbname"];
			self::$port = $db["port"];
			self::$name = $db["name"];
			self::$password = $db["password"];
			$this->pdoConn();

		}

		public function pdoConn(){

			try {
				self::$pdo = new \Pdo("mysql:host=".self::$host.";dbname=".self::$dbname.";port=".self::$port, self::$name,self::$password);
				self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$this->conn = self::$pdo;
			} catch (PDOException $e) {
				echo "Ocorreu um Erro : ".$e->getMessage();
			}

		}

	}
	/**
	 * 		try {
				$pdo = new Pdo("mysql:".self::$host.";dbname=".self::$dbname.";port=".self::$port."",self::$name,self::$password);
				$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				echo "Conectou !";
				return $pdo;
			} catch (PDOException $e) {
				echo "Ocorreu um Erro : ".$e->getMessage();
			}
	 */
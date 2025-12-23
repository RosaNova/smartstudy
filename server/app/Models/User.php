<?php
namespace App\Models;
require_once __DIR__."/../../config/Database.php";
use PDO;
use config\Database;

class User{
    private $db;
      public function __construct() {
        $this->db = Database::getConnection();
    }
   public function create($username, $password, $email) {
    try {
        $stmt = $this->db->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        return $stmt->execute([$username, $email, $hashedPassword]);
    } catch (\PDOException $e) {
        echo json_encode(["message" => "Error: " . $e->getMessage()]);
        return false;
    }
   }

    public function findByEmail($email){
         $stmt = $this->db->prepare("SELECT * FROM users WHERE email = ?");
         $stmt->execute([$email]);
         return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}

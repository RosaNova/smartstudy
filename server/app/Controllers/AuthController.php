<?php 
namespace App\Controllers;
require_once __DIR__."/../Models/User.php";
require_once __DIR__."/../Helpers/AuthHelper.php";
use App\Models\User;
use App\Helpers\AuthHelper;

class AuthController {
    private $userModel;

    public function __construct(){
        $this->userModel = new User();
    }
    
   public function register() {
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data['username']) || empty($data['email']) || empty($data['password'])) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required"]);
        return;
    }

    if ($this->userModel->findByEmail($data['email'])) {
        http_response_code(409);
        echo json_encode(["message" => "Email already exists"]);
        return;
    }

    $created = $this->userModel->create($data['username'], $data['password'], $data['email']);
    if ($created) {
        echo json_encode(["message" => "User registered successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to register user"]);
    }
}


     public function login() {
        $data = json_decode(file_get_contents("php://input"), true);
        $user = $this->userModel->findByEmail($data['email']);
        if (!$user || !password_verify($data['password'], $user['password'])) {
            http_response_code(401);
            echo json_encode(["message" => "Invalid credentials"]);
            return;
        }

        $token = AuthHelper::generateToken($user['id']);
        echo json_encode([
            "message" => "Login successful",
            "token" => $token,
            "user" => [
                "user_id" => $user['id'],
                "username" => $user['username'],
                "email" => $user['email']
            ]
        ]);
    }
}

<?php 
namespace App\Helpers;
class AuthHelper
{
    public static function generateToken($user_id){
    $header = base64_encode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
    $payload = base64_encode(json_encode([
        'user_id' => $user_id,
        'exp' => time() + 3600
    ]));

    $secret = 'my_secret_key';
    $signature = base64_encode(hash_hmac('sha256', "$header.$payload", $secret, true));

    return "$header.$payload.$signature";
    }

    public static function verifyToken($token) {
        $data = json_decode(base64_decode($token), true);
        return ($data && $data['exp'] > time()) ? $data['user_id'] : false;
    }

    public static function logout(): void{
        unset($_SESSION['user_id']);
    }
}
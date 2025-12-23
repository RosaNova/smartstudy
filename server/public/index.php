<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Handle preflight (OPTIONS) request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No content, but valid
    exit;
}

require_once __DIR__ . '/../app/Controllers/AuthController.php';
use app\Controllers\AuthController;

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$auth = new AuthController();

switch ($requestUri) {
    case '/api/auth/register':
        if ($method === 'POST') {
            $auth->register();
        } else {
            http_response_code(405);
            echo json_encode(["message" => "Method not allowed"]);
        }
        break;
    case '/api/auth/login':
        if ($method === 'POST') {
            $auth->login();
        } else {
            http_response_code(405);
            echo json_encode(["message" => "Method not allowed"]);
        }
        break;
    default:
        http_response_code(404);
        echo json_encode(["message" => "Route not found: $requestUri"]);
        break;
}

<?php
use App\Controllers\AuthController;

$auth = new AuthController();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'register') {
    $auth->register();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'login') {
    $auth->login();
}

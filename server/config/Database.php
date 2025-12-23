<?php
namespace config;

use PDO;
use PDOException;

class Database {
    private static $host = 'localhost';
    private static $dbname = 'SmartStudyDB';
    private static $username = 'root';
    private static $password = 'mydb123';

    public static function getConnection() {
        try {
            $pdo = new PDO("mysql:host=" . self::$host . ";dbname=" . self::$dbname, self::$username, self::$password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }
    }
}

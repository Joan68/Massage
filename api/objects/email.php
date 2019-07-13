<?php
class Email{
 
    // database connection and table name
    private $conn;
    private $table_name = "email";
 
    // object properties
    public $id;
    public $name;
    public $yourEmail;
    public $subject;
	public $message;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
}
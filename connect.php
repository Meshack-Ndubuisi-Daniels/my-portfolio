<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$conn = new mysqli('localhost', 'root', '', 'formdatab');
if($conn->connect_error){die(`Connection Failed : `.$conn->connect_error);}else{$stmt=$conn->prepare("insert into message(name, email, message)values(?,?,?)");
$stmt->bind_param("sss",$name, $email, $message);
$stmt->execute();
//echo "Message submitted successfully";
$stmt->close();
$conn->close();
}


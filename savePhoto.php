<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = new mysqli("localhost", "root", "", "photo_app");

$data = json_decode(file_get_contents("php://input"));

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$photo = $conn->real_escape_string($data->photo);

$sql = "INSERT INTO photos (photo) VALUES ('$photo')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>

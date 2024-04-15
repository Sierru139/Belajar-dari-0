<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $murid = [
    [
        "nama" => "Yasir",
        "nis" => "0293384718",
        "email" => "sirsiruesta123@gmail.com",
        "jurusan" => "RPL",
        "gambar" => "yasir.jpg"
    ],
    [
        "nama" => "Manusya",
        "nis" => "0322938187",
        "email" => "manusyasir331@gmail.com",
        "jurusan" => "RPL",
        "gambar" => "alam.jpg"
    ]
];
echo $murid[0]["nis"];
?>
</body>
</html>
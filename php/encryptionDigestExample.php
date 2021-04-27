<?php
$t = "1234";
$salt = "frdqwy0ey884sokcw4ogwsw84s440cs";
$withHash = $t .'{' . $salt . '}';
//$salted = hash_pbkdf2("sha512", $t, $salt, 5000, 40, false);

$salted = $t . '{'.$salt.'}';
$encrypted = hash("sha512", $salted, false);

// "stretch" hash
for ($i = 1; $i < 5000; ++$i) {
    $encrypted = hash("sha512", $salted, false);
}

$md5Ver = md5($salted, false);

$encoded = base64_encode($encrypted);
echo "Password: " . $t . "<br>";
echo "Encrypted: " . $encoded . "<br>";
echo "<br><br> Goal: sTqJgagMg8JP06SoIbMHSO8l09Uw7vUBUh+8C+ct1eDWvlFRuSyPV/Af9GEmZxOipVa8H89JCyJepZDUIcjdLw==";

echo "<br><br> MD5 JavaS: ". $md5Ver . "<br>";
echo "MD5 GOAL:7a01ef4e28b22588e6cea987594be220";


// Validate Secret
$nonce = "YWdrd2R1aDVudGU=";
$created = "2021-04-27T18:44:30.985Z";
$decodeNonce = base64_decode($nonce);
$encryptLayer1 = sha1($decodeNonce . $created . $md5Ver, false);
$expected = base64_encode($encryptLayer1);


echo "<br><br> Digest: " . $expected;
echo "<br> encrypt: " . $encryptLayer1;
echo "<br> decodeNonce " . $decodeNonce;
?> 

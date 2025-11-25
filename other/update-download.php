<?php
$jsonFile = 'downloads.json';

if (!file_exists($jsonFile)) {
    file_put_contents($jsonFile, json_encode(['count' => 0]));
}

$data = json_decode(file_get_contents($jsonFile), true);
$data['count'] += 1;
file_put_contents($jsonFile, json_encode($data));

http_response_code(200);

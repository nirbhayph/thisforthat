<?php
//Setting up 'Access-Control-Allow-Origin' header
header("Access-Control-Allow-Origin: *");

//running parser.js script with phantomjs
echo exec('/usr/local/bin/phantomjs  /var/www/html/thisforthat/api/parser/parser.js');
?>

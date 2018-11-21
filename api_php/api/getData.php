<!--Directly using existing
API (http://itsthisforthat.com/api.php?json) 
to retrieve this+that combination-->
<?php
//Setting up 'Access-Control-Allow-Origin' header
header("Access-Control-Allow-Origin: *");

//To retrieve response from existing API directly
$result = file_get_contents("http://itsthisforthat.com/api.php?json");

//Echo's respose
echo $result;
?>

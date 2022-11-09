<?php

  include 'config.php';
  
  $_SESSION['state'] = 5;  // start
  
  // zruseni vyplnovani dotazniku
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','10')"; 
  mysql_query($insert);
  
?>

  <script>
    location.replace("index.php");
  </script>
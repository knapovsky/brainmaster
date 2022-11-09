<?php

  include 'config.php';
  
  $_SESSION['state'] = 5;  // start
  
  // ukonceni top10
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','15')"; 
  mysql_query($insert); 
  
?>

  <script>
    location.replace("index.php");
  </script>
<?php

  include 'config.php';
  
  $_SESSION['state'] = 4;  // login
  
  // nacteni logovaci stranky po kliku na sign in
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','17')"; 
  mysql_query($insert); 
  
?>

  <script>
    location.replace("index.php");
  </script>
<?php

  include 'config.php';
  
  $_SESSION['state'] = 5;  // nacteni stranky se hrama
  $_SESSION['userID'] = 1; // nastaveni hosta
  $_SESSION['GUI'] = 1; // GUI1
  
  // odhlaseni uzivatele
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','14')"; 
  mysql_query($insert); 
  
?>

  <script>
    location.replace("index.php");
  </script>
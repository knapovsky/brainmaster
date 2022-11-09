<?php

  include 'config.php';
  
  // zruseni prihlaseni
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','16')"; 
  mysql_query($insert);
  
  // podle GUI hry nacteni prislusneho typu  

  
  $_SESSION['state'] = 5;  // start

  
?>
    
    <script>
      location.replace("index.php");
    </script>  
    

<?php

  include 'config.php';
  
  // nacteni registracni stranky
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','5')"; 
  mysql_query($insert);
  
  // nastaveni session pro zobrazeni prislusneho divu 

  
  $_SESSION['state'] = 3;

  
?>
    
    <script>
      location.replace("index.php");
    </script>  
    

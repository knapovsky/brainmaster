<?php

  include 'config.php';
  
  // zruseni registrace - klik na krizek
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','7')"; 
  mysql_query($insert);
  
  // podle GUI hry nacteni prislusneho typu  

  
  $_SESSION['state'] = 4;  // login

  
?>
    
    <script>
      location.replace("index.php");
    </script>  
    

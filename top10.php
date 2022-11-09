<?php

  echo "<div id='your_score'>Your Score: <strong>".$_SESSION['score']."</strong></div>";
  
  // urceni typu hry
  $type = $_SESSION['game_type'];
  
  // nacteni vsech zaznamu a vypsani top 10
  $vysledek=mysql_query("select * from score where score.game_type=".$type." ORDER BY score.score DESC");
  
  echo("<br/><h2 id='top10_head'>Top 10</h2><br/>");
  echo "<table id='table_top10'>";
  
  for($i = 0; $i < 10; $i++) {
    $zaznam = MySQL_Fetch_Array($vysledek);  // nacteni celeho radku
    $score = round($zaznam['score'], 2); 
    echo "<tr><td class='top_user'>".$zaznam['user']."</td><td class='top_score'>".$score."</td></tr>";
  }
  
  echo "</table><br/>";
  
?>
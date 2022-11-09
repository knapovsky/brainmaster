<?php

  include 'config.php';

  // zpracovani hodnot ze hry


  $id = $_SESSION['userID'];
  $vysledek=mysqli_query($con, "SELECT * FROM users WHERE id = '$id'");
  $row = mysqli_fetch_array($con, $vysledek);

  $username = $row['nick'];  // username


  $type = $_GET['type'];  // typ hry
  $difficulty = $_GET['difficulty'];  // obtiznost hry

  $control = $_GET['control'];  // ovladani

  $path_user_score = $_GET['pathfinderscore'];  // dosazene score pro pathfinder
  $path_score_max = $_GET['pathlenght'];  // maximalni mozne skore v pathfinderu
  $path_timetolearn = $_GET['g1timetolearn'];  // cas na uceni pathfinderu

  $color_user_score = $_GET['correctcolors'];  // dosazene score pro colourchallenge
  $color_score_max = $_GET['fields'];  // maximalni mozne skore v colorchallenge
  $color_timetolearn = $_GET['g2timetolearn'];  // cas na uceni colourchallenge

  $time = $_GET['time'];  // cas hry

  $score_result = 0;  // vysledne skore

  // vypocet skore
  switch($type)
  {
    // ----------------- VYPOCET SKORE PRO PATHFINDER
    case "pathFinder":
      $type = 1;  // urceni vyctoveho typu hry

      $score_result = $path_user_score * ($difficulty * 10);

      // pokud hru vyhral, pricti bonusove skore
      if ($path_user_score == $path_score_max) {

        switch($difficulty)
        {
          case "1":
            $score_result += 1000;
            break;

          case "2":
            $score_result += 2000;
            break;

          case "3":
            $score_result += 3000;
            break;
        }
      }

      // pricti narocnost casu na uceni
      switch($path_timetolearn)
      {
        case "15":
          $score_result += 0;
          break;

        case "10":
          $score_result += 150;
          break;

        case "8":
          $score_result += 300;
          break;
      }

      // odecti ztraceny cas
      $score_result -= ($time / 100) / $difficulty;

      // osetreni zaporneho skore
      if ($score_result < 0) {
        $score_result = 0;
      }

      break;

    // ----------------- VYPOCET SKORE PRO COLOURCHALLENGE
    case "colorChallenge":
      $type = 2;  // urceni vyctoveho typu hry

      $score_result = $color_user_score * ($difficulty * 10);

      // pokud hru vyhral, pricti bonusove skore
      if ($color_user_score == $color_score_max) {

        switch($difficulty)
        {
          case "1":
            $score_result += 1000;
            break;

          case "2":
            $score_result += 2000;
            break;

          case "3":
            $score_result += 3000;
            break;
        }
      }

      // pricti narocnost casu na uceni
      switch($color_timetolearn)
      {
        case "15":
          $score_result += 0;
          break;

        case "10":
          $score_result += 150;
          break;

        case "8":
          $score_result += 300;
          break;
      }

      // odecti ztraceny cas
      $score_result -= ($time / 100) / $difficulty;

      // osetreni zaporneho skore
      if ($score_result < 0) {
        $score_result = 0;
      }

      break;

    default:
      echo "Nepodařilo se určit typ hry.";
      break;
  }

/*
  // kontrolni vypis
  echo "Username: ".$username."<br />".
  "GameType: ".$type."<br />".
  "Obtiznost: ".$difficulty."<br />".
  "TypOvladani: ".$control."<br /><br />".
  "Dosazene skore PATH: ".$path_user_score."<br />".
  "MAX skore PATH: ".$path_score_max."<br />".
  "Cas na uceni PATH: ".$path_timetolearn."<br /><br />".
  "Dosazene skore COLOR: ".$color_user_score."<br />".
  "MAX skore COLOR: ".$color_score_max."<br />".
  "Cas na uceni COLOR: ".$color_timetolearn."<br />".
  "Cas hry: ".$time."<br /><br />";

  echo "Score: ".$score_result;
*/


  $_SESSION['score'] = $score_result;  // ulozeni dosazeneho skore do session
  $_SESSION['game_type'] = $type;  // zapamatovani typu hry kvuli nutnosti rozliseni v TOP10

  // zapsani skore do DB
  $insert = "INSERT INTO score VALUES ('','$username','$type','$score_result')";
  mysql_query($insert);

  // zapsani zaznamu o dokonceni hry
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','8')";
  mysql_query($insert);

  $_SESSION['state'] = 1;  // zobrazeni skore
?>
    <script>

    location.replace("index.php");

    </script>
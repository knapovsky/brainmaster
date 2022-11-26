<?php

  // pripojeni k DB

  define("SQL_HOST","localhost");

  define("SQL_DBNAME","brainmaster");

  define("SQL_USERNAME","");

  define("SQL_PASSWORD","");


  // Create connection
  $con = mysqli_connect(SQL_HOST, SQL_USERNAME, SQL_PASSWORD) or   die("Connection failed: " . mysqli_connect_error());


  mysqli_select_db($con, SQL_DBNAME) or die("Nelze vybrat databázi: ". mysqli_error());


  // nastaveni kodovani query dat z DB na utf8

  mysqli_query($con, "SET NAMES utf8");



  define("url", 'http://'.$_SERVER['HTTP_HOST'].'/');



	// nastartovani session

	session_start();



	if (!isset($_SESSION['CREATED'])) {

    $_SESSION['CREATED'] = time();

    $_SESSION['state'] = 4;  // login

  } else if (time() - $_SESSION['CREATED'] > 600) {

    // session started more than 30 minates ago

    session_regenerate_id(true);    // change session ID for the current session an invalidate old session ID

    $_SESSION['CREATED'] = time();  // update creation time

    $_SESSION['state'] = 4;  // login

  }







	require ("class.phpmailer.php");



?>

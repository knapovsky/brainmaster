<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />



<LINK REL=StyleSheet HREF="./css/reset.css" TYPE="text/css">

<LINK REL=StyleSheet HREF="./css/game.css" TYPE="text/css">

<LINK REL=StyleSheet HREF="./css/jquery-ui.css" TYPE="text/css">

<LINK REL=StyleSheet HREF="./css/jquery-ui-custom.css" TYPE="text/css">

<script type="text/javascript" src="./js/jquery-min.js"></script>

<script type="text/javascript" src="./js/jquery-ui-min.js"></script>

<script type="text/javascript" src="./js/game.js"></script>

<script type="text/javascript" src="./js/overlay.js"></script>

<title>Brain Master</title>



<script type="text/javascript">



  var _gaq = _gaq || [];

  _gaq.push(['_setAccount', 'UA-21401761-5']);

  _gaq.push(['_trackPageview']);



  (function() {

    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;

    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

  })();



</script>



</head>

<body>

	<div id="screen">

	<div id="overlay"></div>

	    <div id="main" style="margin-top: 40px;">

        	<!-- main zakladni div pro zobrazeni hry vseho-->

        <a href="logo.php">

	     	<div id="logo">

                  <!-- zobrazeni loga-->

                   <!-- LOGO -->

          	</div></a>

          	<div id="game_template">




			<!-- POLADIT START-->

			<div id="start" onclick="startGame()">

				<div id="start_img" ></div>

			</div>

	            	<!-- rozhrani hry-->

	              	<div id="left">

	              		<!-- levy blok hry-->

	                 	<!--LEFT BLOK-->

	                 	<h2 class="choose_label">Game Type</h2>

	                	<div id="game_type">

	             			<!-- typ hry-->

	               			<div id="path_fin">

	                    		<input id="choose_path" type="radio" name="game_group" value="pathFinder" class="radio_path" checked/><label for="choose_path"><h3 class="choose_selection" id="path_label">Path Finder</h3></label>

	                  		</div>

	              			<label for="choose_path"><div id="path_ico"></div></label>

							<div id="color_chal">

								<!-- @note onclick zatemnit zadavani klavesnici -->

								<input id="choose_color" type="radio" name="game_group" value="colorChallenge" class="radio_color" ><label for="choose_color"><h3 class="choose_selection_color" id="color_label">Color Challenge</h3></label>

							</div>

	                        <label for="choose_color"><div id="color_ico"></div></label>

	                    </div>

	                    <h2 class="choose_label">Difficulty</h2>

							<div id="difficulty">

								<!-- obtiznost -->
								<label for="easy_difficulty">
								<div id="easy" >

									<input type="radio" id="easy_difficulty" name="dif_group" class="radio_dif" value="easy">

								</div>
								</label>
								<label for="normal_difficulty">
								<div id="normal">

									<input type="radio" id="normal_difficulty" name="dif_group" class="radio_dif" value="normal" checked>

								</div>
								</label>
								<label for="insane_difficulty">
								<div id="insane">

									<input type="radio" id="insane_difficulty" name="dif_group" class="radio_dif" value="insane">

								</div>
								</label>

	                        </div>

					</div>

	                <div id="center">

						<!-- stredni blok hry-->

						<!--CENTER BLOK-->

						<div id="gameWindow">

							<!--div id="overlay">

								<button id="newGame" class="new_game" onclick="startGame()">Start New Game</button>

							</div-->


							<div id="progressBarWrapper">

								<!-- Spolecne pro hru 1 a 2 -->

								<div id="progressBarName"></div>

								<div id="progressBarValue"></div>

								<div id="progressBarMessage"></div>

								<div id="progressBar"></div>

							</div>

							<div id="pathWindow">

								<!-- Pro hru 1 -->

							</div>

							<div id="dragWindow">

								<!-- Pro hru 2 -->

								<div id="dragit">

									<div id="hand"></div>

									<div id="dragtext">Drag&Drop:</div>

								</div>

								<div id="colors"></div>

								<div id="gameField"></div>

							</div>

						</div>

			</div>

			<div id="right">

					<!-- pravy blok hry-->

					<!-- RIGHT BLOK-->

					<h2 class="choose_label">User</h2>

					<div id="user">


					</div>

					<h2 class="choose_label">Controller</h2>

					<div id="control">

						<!-- ovladani -->

						<div id="radio_key">

							<input type="radio" id="radio_keyboard" name="control_group" class="radio_key" value="keyboard"><label for="radio_keyboard"><h2 id="keyboard">Keyboard</h2></label>

						</div>

						<label for="radio_keyboard">
						<div id="key_ico"></div>
						</label>
						<div id="radio_mouse">

							<input type="radio" id="mouse_control" name="control_group" class="radio_mouse" value="mouse" checked><label for="mouse_control"><h2 id="mouse">Mouse</h2></label>

						</div>
						<label for="mouse_control">
						<div id="mouse_ico"></div>
						</label>
					</div>

	            	</div>

	        </div>

		</div>

	</div>

</body>



<script type="text/javascript">

hideAll();

start_game();

log_out_vis();

</script>

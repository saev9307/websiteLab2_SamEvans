
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];
				

function viewStudentStats(id,toggle){
	var dropdown = document.getElementById(id)
  	if (toggle>0) {
    		dropdown.style.height= "auto";
    		dropdown.style.visibility= "visible";
  		} 
  	else {
    		dropdown.style.height= "0";
    		dropdown.style.visibility= "hidden";
  	}
}

function changeColor(color) {
	document.body.style.backgroundColor = color; 
}

	function loadStatsPage(){
		var table = document.getElementById("stats_table");
		var row_counter;
		var cell_value;
		var wins=0;
		var losses=0;
		var hometeam="CU Boulder"
		for(row_counter = 2; row_counter < table.rows.length; row_counter++)
		{
				homescore=table.rows[row_counter].cells[2].innerHTML;
				awayscore=table.rows[row_counter].cells[3].innerHTML;

				if ( (homescore) > awayscore){
					cell_value = hometeam;
					wins= parseInt(wins) + 1;
				}
				else{
					cell_value=table.rows[row_counter].cells[1].innerHTML;
					losses= parseInt(losses) + 1;
				}

				table.rows[row_counter].cells[4].innerHTML = cell_value;
		}
		var winid=document.getElementById("wins");
		var lossid=document.getElementById("losses");
		winid.innerHTML = wins;
		lossid.innerHTML = losses;

	}



 loadPlayersPage() {
//This function Is complete
	var selectionText = "";
	for(var player_i = 0; player_i < players.length; player_i++) {
		selectionText += '<a href="#" onclick="switchPlayers(' + player_i + ')"> '+ players[player_i].name + ' </a><br>';
	}
	document.getElementById("player_selector").innerHTML = selectionText;
}


function switchPlayers(playerNum) {
	//changes the year based on user selection
	document.getElementById("p_year").innerHTML = players[playerNum].year;
	document.getElementById("p_major").innerHTML = players[playerNum].major;
	document.getElementById("g_played").innerHTML = players[playerNum].games_played;
	document.getElementById("p_yards").innerHTML = players[playerNum].pass_yards;
	document.getElementById("r_yards").innerHTML = players[playerNum].rushing_yards;
	document.getElementById("rec_yards").innerHTML = players[playerNum].receiving_yards;

	document.getElementById("avg_p_yards").innerHTML = players[playerNum].year;	
	document.getElementById("avg_r_yards").innerHTML = players[playerNum].year;
	document.getElementById("avg_rec_yards").innerHTML = players[playerNum].year; 
	// assign values to all elements here
}




$(document).ready(function() {

  ///////////////////
  //Begin Vairables//
  ///////////////////

  var xWins = 0;
  var oWins = 0;
  var winner = null
  var gameCounter = 0

  //Sets the input for currentMove
  var currentMove = 'X';

  //Squares turned into variables
  var $squareOne = $('#one');
  var $squareTwo = $('#two');
  var $squareThree = $('#three');
  var $squareFour = $('#four');
  var $squareFive = $('#five');
  var $squareSix = $('#six');
  var $squareSeven = $('#seven');
  var $squareEight = $('#eight');
  var $squareNine = $('#nine');

  //Keeps track of the number of moves to determine the switchMove function
  var moveCounter = 0;

  ///////////////////
  //Begin functions//
  ///////////////////

  //Switches moves between X and O
  var switchMove = function() {
    if (moveCounter % 2 !== 0) {
      currentMove = "O";
    } else {
      currentMove = "X";
    };
  };


  //Look at what repeats and put it in as the arguments for a function.
  //This function takes the code from above (it is collapsed) and makes it so all of the elements are directly editable from the function. It makes a shit ton of sense... 
  var checkWin = function($s1, $s2, $s3, marker, winningSquares) {
    if ($s1.text() === marker && $s2.text() === marker && $s3.text() === marker) {
      $(winningSquares).addClass('winningSquares');
      return true;
    }
  }

  //Checks the winning values for all the squares(Long and chunky will try and do with arrays if I can work it out)
  var evaluateWinner = function() {
    if (checkWin($squareOne, $squareTwo, $squareThree, "X", '#one, #two, #three')) {
      return true;
    };
    if (checkWin($squareOne, $squareTwo, $squareThree, "O", '#one, #two, #three')) {
      return true;
    };
    if (checkWin($squareOne, $squareFour, $squareSeven, "X", '#one, #four, #seven')) {
      return true;
    };
    if (checkWin($squareOne, $squareFour, $squareSeven, "O", '#one, #four, #seven')) {
      return true;
    };
    if (checkWin($squareOne, $squareFive, $squareNine, "X", '#one, #five, #nine')) {
      return true;
    };
    if (checkWin($squareOne, $squareFive, $squareNine, "O", '#one, #five, #nine')) {
      return true;
    };

    //squareFive Winning options...

    // if (($squareFive.text() === "X") && ($squareTwo.text() === "X") && ($squareEight.text() === "X")) {
    //   $('#five, #two, #eight').addClass('winningSquares').fadeIn(5000)
    //   return true;
    // };
    if (checkWin($squareFive, $squareTwo, $squareEight, "X", '#five, #two, #eight')) {
      return true;
    };
    if (checkWin($squareFive, $squareTwo, $squareEight, "O", '#five, #two, #eight')) {
      return true;
    };
    if (checkWin($squareFive, $squareFour, $squareSix, "X", '#five, #four, #six')) {
      return true;
    };
    if (checkWin($squareFive, $squareFour, $squareSix, "O", '#five, #four, #six')) {
      return true;
    };
    if (checkWin($squareFive, $squareThree, $squareSeven, "X", '#five, #three, #seven')) {
      return true;
    };
    if (checkWin($squareFive, $squareThree, $squareSeven, "O", '#five, #three, #seven')) {
      return true;
    };

    //squareThree Winning options...

    if (checkWin($squareNine, $squareThree, $squareSix, "X", '#nine, #three, #six')) {
      return true;
    };
    if (checkWin($squareNine, $squareThree, $squareSix, "O", '#nine, #three, #six')) {
      return true;
    };
    if (checkWin($squareNine, $squareSeven, $squareEight, "X", '#nine, #seven, #eight')) {
      return true;
    };
    if (checkWin($squareNine, $squareSeven, $squareEight, "O", '#nine, #seven, #eight')) {
      return true;
    };
  };

  //This sets all the elements when the winner has been received. It works by calling the evaluate winner function when it is defined as true. It also checks whether the move counter has reached 9 (the total number of moves allowed for a draw) and whether the game was won on the last move or was a legitimate draw.
  var getWinner = function() {
    if (evaluateWinner()) {
      $('boardAndInstructions').addClass('bodyWinner');
      $('#winnerHidden').show('puff');
      $('#winnerHidden h1').text(currentMove + ' Wins!');
      $('.square').off();
      winner = currentMove;
    } else if (moveCounter === 9) {
      $('#winnerHidden h1').text("It's a Draw!")
      $('#winnerHidden').show('puff')
      winner = 'draw'
    }
  };

  //This is the main function that is called for the click Event. It takes in all the other functions.
  var playerMove = function() {
    switchMove()
    $(this).html(currentMove);
    moveCounter++
    getWinner()
    console.log(moveCounter)
    console.log('check')
  };

  //Removes all of the winningSquares classes to reset for the next game
  var clearBoard = function() {
    $squareOne.text("").removeClass('winningSquares');
    $squareTwo.text("").removeClass('winningSquares');
    $squareThree.text("").removeClass('winningSquares');
    $squareFour.text("").removeClass('winningSquares');
    $squareFive.text("").removeClass('winningSquares');
    $squareSix.text("").removeClass('winningSquares');
    $squareSeven.text("").removeClass('winningSquares');
    $squareSeven.text("").removeClass('winningSquares');
    $squareEight.text("").removeClass('winningSquares');
    $squareNine.text("").removeClass('winningSquares');
  };




  /////////////////
  //Start Jquery//
  ///////////////

  //Click event that runs the game.
  $('.square').one('click', playerMove)

  //Click event to bring up the instructions page
  $('#instruct #instructClick').on('click', function() {
    console.log('instruct click is firing');
    $('#instructHidden').show('puff');
    $('#boardAndInstructions').hide('puff');
  });

  $('#instruct #themeClick').on('click', function() {
    console.log('theme click is firing');
    $('#boardAndInstructions').hide('puff');
    $('#changeThemeHidden').show('puff');
  });

  //Closes whatever the parent element is of the close button
  $('.closeButton').on('click', function() {
    $('#changeThemeHidden').hide('puff');
    $('#boardAndInstructions').show('puff');
  });



  //Click event to hide the instructions and bring up play page
  $('#instructHidden h2').on('click', function() {
    console.log('instructions click is firing');
    $('#instructHidden').hide('puff');
    $('#boardAndInstructions').show('puff');
  });


  //This will reset all the squares and have the game run again.
  $('#playAgain').on('click', function() {
    console.log('Reset is firing')
    $('#winnerHidden').hide('puff');
    clearBoard()
    $('.square').one('click', playerMove)
    moveCounter = 0;
    gameCounter += 1;
    console.log('Games so far is ' + gameCounter)
    if (winner === "X") {
      xWins += 1;
      console.log(xWins);
    } else if (winner === "O") {
      oWins += 1;
      console.log(oWins);
    };
    winner = null
    $('#gameCounter').text('You have played ' + gameCounter)
    $('#gamesXWon').text('Crosses have won ' + xWins)
    $('#gamesOWon').text('Naughts have won ' + oWins)
  });

  //Changes theme to field
  $('#changeThemeHidden #field').on('click', function() {
    $('#themeSelect').attr('href', 'styles.css')
  });
  //Changes theme to space
  $('#changeThemeHidden #space').on('click', function() {
    $('#themeSelect').attr('href', 'space.css')
  });
  //Changes theme to space
  $('#changeThemeHidden #ocean').on('click', function() {
    console.log('ocean click is firing')
    $('#themeSelect').attr('href', 'ocean.css')
  });
  //Changes theme to WhatTheFuck
  $('#changeThemeHidden #WhatTheFuck').on('click', function() {
    $('#themeSelect').attr('href', '/Styles/WhatTheFuck.css')
  });
});

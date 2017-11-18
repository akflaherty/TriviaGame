$(document).ready(function() {

    var triviaObj = {
        question0: 'Which of these countries is not landlocked?',
        choices0: ['Austria', 'Uganda', 'Serbia', 'Croatia'],
        answerIndex0: 3,
        question1: 'Who was the third US president?',
        choices1: ['Tyler', 'Adams', 'Jefferson', 'Roosevelt'],
        answerIndex1: 2
    };

    // var showNextID;
    var time;
    var questionIndex = 0;	// tracks current question
    var maxQuestionIndex = 1;	// number of questions - 1
    var correct = 0;
    var wrong = 0;

    // var intervalID = setInterval(updateClock, 1000);
    var intervalID;

    displayNewTrivia(questionIndex);

    function displayNewTrivia(index) {
    	// setup timer
    	time = 16;
    	intervalID = setInterval(updateClock, 1000);

        // empty holder divs
        $('#questionDiv').empty();
        $('#answerDiv').empty();
        // display question
        var question = 'question' + index;
        var questionText = triviaObj[question];
        var newDiv = $('<div></div>').text(questionText);
        // newDiv.attr('class', 'question');
        $('#questionDiv').prepend(newDiv);

        // display choices
        var choices = 'choices' + index;
        var choiceArray = triviaObj[choices];
        for (var i = 0; i < choiceArray.length; i++) {
            var a = $('<p></p>').text(choiceArray[i]);
            a.attr('class', 'answer');
            a.attr('id', i);
            $('#answerDiv').append(a);
        }
    }

    function displayResults() {
    	$('#questionDiv').empty();
    	$('#answerDiv').empty();

    	var newHeader = $('<h2></h2>').text('Game over.');
    	var winDiv = $('<div></div>').text('You got ' + correct +' questions correct');
    	var lossDiv = $('<div></div>').text('You got ' + wrong +' questions wrong');
    	var resetBtn = $('<button></button').text('Try again');
    	resetBtn.attr('id', 'reset');

    	$('#questionDiv').append(newHeader);
    	$('#questionDiv').append(winDiv);
    	$('#questionDiv').append(lossDiv);
    	$('#questionDiv').append(resetBtn);
    }

    function updateClock() {
    	// decrements time left, checks if time has run out and stops counter
    	time --;
    	$('#timeDisp').text(time);
    	if (time <= 0) {
    		timesUp();
    	}
    }

    function timesUp() {
    	wrong ++;
    	clearInterval(intervalID);
    	questionResult('time');
    }

    function correctAnswer() {
    	correct ++;
    	clearInterval(intervalID);
    	questionResult('correct');
    }

    function incorrectAnswer() {
    	wrong ++;
    	clearInterval(intervalID);
    	questionResult('incorrect');
    }

    function questionResult(status) {
    	$('#answerDiv').empty();
    	if (status == 'time') {
    		// ran out of time
    		var header = $('<h3>').text('Time\'s up.');
    	} else if (status == 'correct') {
    		// correct
    		var header = $('<h3>').text('That\'s right!');
    	} else {
    		// incorrect
    		var header = $('<h3>').text('That\s inccoret.');
    	}
    	$('#answerDiv').append(header);
    	questionIndex ++;
    	if (questionIndex <= maxQuestionIndex) {
    		setTimeout(displayNewTrivia, 10000, questionIndex);
    	} else {
    		setTimeout(displayResults, 10000);
    	}
    }

    $(document).on("click", ".answer", function () {
    	// user clicks an answer
    	// get answer selection
    	var selection = event.target.id;
    	// check if answer is correct
    	if (selection == triviaObj['answerIndex' + questionIndex]) {
    		// if correct use correctAnswer to update display
    		correctAnswer();
    	} else {
    		// else use incorrectAnswer to update display
    		incorrectAnswer();
    	}

    });

    $(document).on("click", '#reset', function() {
        var time = 11;
        var questionIndex = 0; // tracks current question
        var maxQuestionIndex = 1; // number of questions - 1
        var correct = 0;
        var wrong = 0;

        displayNewTrivia(questionIndex);
    })

});
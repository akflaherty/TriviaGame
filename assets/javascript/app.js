$(document).ready(function() {

    var triviaObj = {
        question0: 'Which of these countries is not landlocked?',
        choices0: ['Austria', 'Uganda', 'Serbia', 'Croatia'],
        answerIndex0: 3,
        question1: 'Who was the third US president?',
        choices1: ['Tyler', 'Adams', 'Jefferson', 'Roosevelt'],
        answerIndex1: 2
    };

    var intervalID;
    var showNextID;
    var time = 30;
    var totalQuestions = 2;
    var correct = 0;
    var wrong = 0;

    intervalID = setInterval(updateCount, 1000);

    displayNewTrivia(0);

    function displayNewTrivia(index) {
    	// empty holder div
    	$(questionDiv).empty();

    	// display question
        var question = 'question' + index;
        var questionText = triviaObj[question];
        var newDiv = $('<div></div>').text(questionText);
        newDiv.attr('class', 'question');
        // newDiv.attr('id', )

        // display choices
        var choices = 'choices' + index;
        var choiceArray = triviaObj[choices];
        $(questionDiv).append(newDiv);
        for (var i = 0; i < choiceArray.length; i++) {
        	var a = $('<p></p>').text(choiceArray[i]);
        	a.attr('class', 'answer');
        	a.attr('class', choices);
        	a.attr('id', i);
        	newDiv.append(a);
        }
    }

    function updateCount() {
    	time --;
    	$('#timeDisp').text(time);
    	if (time <= 0) {
    		inccorectAnswer();
    		clearInterval(intervalID);
    	}
    }

    function correctAnswer() {
    	// console.log('Correct');
    }

    function inccorectAnswer() {
    	// console.log('Wrong');
    }


});
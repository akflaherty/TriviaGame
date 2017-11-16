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
    var time = 30;
    var questionIndex = 0;

    function displayTrivia(index) {
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
        	a.attr('class', index);
        	a.attr('id', i);
        	newDiv.append(a);
        }
    }

    // function displayTrivia(index) {
    // 	// display question
    //     var question = 'question' + index;
    //     var questionText = triviaObj[question];
    //     var newDiv = $('<div></div>').text(questionText);
    //     newDiv.attr('class', 'question');
    //     // newDiv.attr('id', )

    //     // display choices
    //     var choices = 'choices' + index;
    //     var choiceArray = triviaObj[choices];
    //     $(questionDiv).append(newDiv);
    //     for (var i = 0; i < choiceArray.length; i++) {
    //     	var a = $('<p></p>').text(choiceArray[i]);
    //     	a.attr('class', 'answer');
    //     	a.attr('class', index);
    //     	a.attr('id', i);
    //     	newDiv.append(a);
    //     }
    // }

    // displayTrivia(0);

});
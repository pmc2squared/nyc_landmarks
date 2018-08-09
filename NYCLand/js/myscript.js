// Receive Updates



// NYC TRIVIA

  $('#fadeIn').click(function(){
        $('p1').fadeIn('slow');
    });

    $('#fadeOut').click(function(){
        $('p1').fadeOut('slow');
    });
var myQuestions = [
    {
        question: "What New York City (NYC) Art Deco building has six levels of stainless steel arches topped by a lit lancet spire on its top?",
        answers: {
            a: 'Empire State Building',
            b: 'Chrysler Building',
            c: 'Waldorf-Astoria'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which Manhattan streets border Central Park on the North and South?",
        answers: {
            a: '14th and 59th Streets',
            b: '89th and 207th Streets',
            c: '59th and 110th Streets'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which New York building and tourist attraction was the headquarters of Lex Luthor in the movie 'Superman'?",
        answers: {
            a: 'Grand Central Terminal',
            b: 'Belvedere Castle',
            c: 'Rockefeller Center'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which famous New York store featured in the title and plot of a 1958 novella by Truman Capote, and a classic 1961 movie starring Audrey Hepburn?",
        answers: {
            a: 'Coach',
            b: 'Tiffany',
            c: 'FAO Schwarz'
        },
        correctAnswer: 'b'
    },
    {
        question: "The Empire State Building is one of New York's best loved landmarks. Built in 1930, and completed in just over a year, it cost $24,000,000 to build. How many floors does it have?",
        answers: {
            a: '137',
            b: '85',
            c: '102'
        },
        correctAnswer: 'c'
    },
    {
        question: "The largest art museum in the Western Hemisphere is located in NYC, what is its name?",
        answers: {
            a: 'Metropolitan Museum of Art',
            b: 'Solomon R. Guggenheim Museum',
            c: 'American Museum of Natural History'
        },
        correctAnswer: 'a'
    },
    {
        question: "The building was designed by Frank Lloyd Wright, opened in 1959, and is shaped like a giant upside down spiral. Which art gallery is housed here?",
        answers: {
            a: 'American Museum of Natural History',
            b: 'Solomon R. Guggenheim Museum',
            c: 'Metropolitan Museum of Art'
        },
        correctAnswer: 'b'
    },
    {
        question: "What do the seven points on the Statue of Liberty's crown represent?",
        answers: {
            a: 'The light shining on the 7 seas & 7 continents',
            b: 'The 7 stars in the galaxy',
            c: 'The 7 wonders of the world'
        },
        correctAnswer: 'a'
    },
    {
        question: "How many commuter bridges cross the East River?",
        answers: {
            a: 'Four',
            b: 'Ten',
            c: 'Seven'
        },
        correctAnswer: 'c'
    },
    {
        question: "What New York building offered a public heliport with regular service through the mid-1970's?",
        answers: {
            a: 'Flatiron Building',
            b: 'Pan Am Building',
            c: 'Woolworth Building'
        },
        correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        
        
    }
}




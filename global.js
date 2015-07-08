var questions = new Array();

// First question
var das_is_please = new Object();
das_is_please.question = "Translate to German: 'please'";
das_is_please.answer = "bitte";
das_is_please.choices = ["verzeihung", "bitte", "danke", "tschau"];
// Push the question to the Array
questions.push(das_is_please);

// Second question
var das_is_i = new Object();
das_is_i.question = "Translate to German: 'I'";
das_is_i.answer = "ich";
das_is_i.choices = ["ich", "wir", "sie", "ihr"];
questions.push(das_is_i);

// Third question
var das_is_airport = new Object();
das_is_airport.question = "Translate to German: 'Airport'";
das_is_airport.answer = "flughafen";
das_is_airport.choices = ["bahn", "busbahnhof", "bahnhof", "flughafen"];
questions.push(das_is_airport);

// Fourth question
var das_is_potato = new Object();
das_is_potato.question = "Translate to German: 'Potato'";
das_is_potato.answer = "kartoffel";
das_is_potato.choices = ["fisch", "fleisch", "kartoffel", "brot"];
questions.push(das_is_potato);

// Fifth question
var das_is_thursday = new Object();
das_is_thursday.question = "Translate to German: 'Thursday'";
das_is_thursday.answer = "donnerstag";
das_is_thursday.choices = ["deinstag", "samstag", "donnerstag", "mittwoch"];
questions.push(das_is_thursday);

var counter = 0;
var question_on_screen = new Object ();
question_on_screen.question = questions[counter].question;
question_on_screen.answer = questions[counter].answer;
question_on_screen.choices = questions[counter].choices;


// Get question content to the correct divs
question_to_load = document.getElementById("question");
question_to_load.innerText = question_on_screen.question;
question_to_load_choices = document.getElementById("choices");
var html = "";
var index = 0;
for (index = 0; index < question_on_screen.choices.length; index++) {
  html += question_on_screen.choices[index] + "<br >";
}
question_to_load_choices.innerHTML = html;

function load_next_question() {
  question_on_screen.question = questions[counter].question;
  question_on_screen.answer = questions[counter].answer;
  question_on_screen.choices = questions[counter].choices;
  question_to_load = document.getElementById("question");
  question_to_load.innerText = question_on_screen.question;
  question_to_load_choices = document.getElementById("choices");
  var html = "";
  var index = 0;
  for (index = 0; index < question_on_screen.choices.length; index++) {
    html += question_on_screen.choices[index] + "<br >";
  }
  question_to_load_choices.innerHTML = html;
}

// Retrieve an answer from the field
//
// Returns user's answer - String
function given_answer() {
  var answer = document.getElementById("answer").value;
  return answer
}

// Checks if the answer was correct or not
//
// answer_text - String that the user has given
// question_on_screen - question Object
//
// Returns true/false Boolean
function is_correct_answer(answer_text, question_on_screen) {
  if (answer_text === question_on_screen.answer) {
    return true
  } else {
    return false
  }
}


question_result = document.getElementById("question_result");
// Displays to the user if the question was correct or not
//
// correct - true/false Boolean
//
// Returns text to the question_result div
function update_question_result(correct) {
  if (correct === true) {
    question_result.innerText = "Success!"
  } else {
    question_result.innerText = "Wrong!"
  }
}

// Runs the chain of functions needed for each question
function process_answer_submission(){
  answer = given_answer();
  correct = is_correct_answer(answer,question_on_screen);
  update_question_result(correct);
  counter++;
}

// Clears the divs
function clear_div(element_id) {
  document.getElementById(element_id).innerHTML = "";
}

submit_button = document.getElementById("submitter");
submit_button.addEventListener("click", process_answer_submission);

next_button = document.getElementById("next");
next_button.addEventListener("click", clear_div("question"));
next_button.addEventListener("click", clear_div("choices"));
next_button.addEventListener("click", load_next_question);

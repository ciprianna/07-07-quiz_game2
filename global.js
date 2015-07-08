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

// Get the first question working
question_1 = document.getElementById("question");
question_1.innerText = das_is_please.question;
question_1_choices = document.getElementById("choices");
var html = "";
var index = 0;
for (index = 0; index < das_is_please.choices.length; index++) {
  html += das_is_please.choices[index] + "<br >";
}
question_1_choices.innerHTML = html;

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
// das_is_please - question Object
//
// Returns true/false Boolean
function is_correct_answer(answer_text, das_is_please) {
  if (answer_text === das_is_please.answer) {
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
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer, das_is_please));
}

submit_button = document.getElementById("submitter");
submit_button.addEventListener("click", process_answer_submission());

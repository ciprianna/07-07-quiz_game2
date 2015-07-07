// First question
var das_is_please = new Object();
das_is_please.question = "Translate to German: 'please'";
das_is_please.answer = "bitte";
das_is_please.choices = ["verzeihung", "bitte", "danke", "tschau"];
// Push the question to the Array
// questions.push(das_is_please);

// Second question
var das_is_i = new Object();
das_is_i.question = "Translate to German: 'I'";
das_is_i.answer = "ich";
das_is_i.choices = ["ich", "wir", "sie", "ihr"];
// questions.push(das_is_i);

// Third question
var das_is_airport = new Object();
das_is_airport.question = "Translate to German: 'Airport'";
das_is_airport.answer = "flughafen";
das_is_airport.choices = ["bahn", "busbahnhof", "bahnhof", "flughafen"];
// questions.push(das_is_airport);

// Fourth question
var das_is_potato = new Object();
das_is_potato.question = "Translate to German: 'Potato'";
das_is_potato.answer = "kartoffel";
das_is_potato.choices = ["fisch", "fleisch", "kartoffel", "brot"];
// questions.push(das_is_potato);

// Fifth question
var das_is_thursday = new Object();
das_is_thursday.question = "Translate to German: 'Thursday'";
das_is_thursday.answer = "donnerstag";
das_is_thursday.choices = ["deinstag", "samstag", "donnerstag", "mittwoch"];
// questions.push(das_is_thursday);

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

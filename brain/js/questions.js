// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	'Which of the following accurately describes the difference between a compiler and an interpreter?',
	'A compiler translates source code into machine code, while an interpreter executes code line by line.',
	'A compiler executes code line by line, while an interpreter translates source code into machine code.',
	'Both compilers and interpreters translate source code into machine code, but interpreters do so faster.',
	'Both compilers and interpreters execute code line by line, but compilers generate more efficient machine code.',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Which of the following is an example of a data structure?',
	'int',
	'float',
	'if-else statement',
	'array',
	4,
	0
);

// Question 3
var q3 = new CQuiz(
	'What is the role of HTML in web development?',
	'To style web pages',
	'To define the structure of web pages',
	'To provide interactive functionality',
	'To manage server-side logic',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'What is the brain of the computing machine?',
	'Arthimitic logic unit',
	'cpu',
	'transistor',
	'resistor',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'What is a pixel?',
	'A small piece of data used for authentication.',
	'A unit of measurement for font sizes.',
	'The smallest unit of a digital image displayed on a screen.',
	'A type of computer memory storage.',
	3,
	0
);

// Question 6
var q6 = new CQuiz(
	'How many digits does binary code contain?',
	'0,1',
	'1',
	'0',
	'2',
	4,
	0
);

// Question 7
var q7 = new CQuiz(
	'What is the purpose of ASCII?',
	'To encode images.',
	'To represent numeric values.',
	'To standardize character encoding.',
	'To encrypt data.',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'What is the primary processing step that occurs before an application generates output?',
	'get input from the user.',
	'Data storing.',
	'Algorithm execution',
	'Data removing',
	3,
	0
);

// Question 9
var q9 = new CQuiz(
	'What is the smallest unit used for storage in computing?',
	'Mega Byte',
	'Giga bit',
	'kilo byte',
	'Tera bit',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'What is the main difference between an Arithmetic Logic Unit (ALU) and a transistor in processing data?',
	'ALU performs calculations, while a transistor process electrical signals to binary codes.',
	'ALU stores data, while a transistor process electrical signals to binary codes.',
	'ALU controls data flow, while a transistor converts digital signals to information.',
	'ALU executes instructions, while a transistor stores memory.',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

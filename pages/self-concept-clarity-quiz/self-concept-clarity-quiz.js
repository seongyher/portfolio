const questions = [
	"My beliefs about myself often conflict with one another.",
	"On one day I might have one opinion of myself and on another day I might have a different opinion.",
	"I spend a lot of time wondering about what kind of person I really am.",
	"Sometimes I feel that I am not really the person that I appear to be.",
	"When I think about the kind of person I have been in the past, I'm not sure what I was really like.",
	"I seldom experience conflict between the different aspects of my personality.",
	"Sometimes I think I know other people better than I know myself.",
	"My beliefs about myself seem to change very frequently.",
	"If I were asked to describe my personality, my description might end up being different from one day to another day.",
	"Even if I wanted to, I don't think I could tell someone what I'm really like.",
	"In general, I have a clear sense of who I am and what I am.",
	"It is often hard for me to make up my mind about things because I don't really know what I want."
	];

const reverseKeyed = [1, 2, 3, 4, 5, 7, 8, 9, 10, 12];

const container = document.getElementById("questions");

for (let i = 0; i < questions.length; i++) {
	const div = document.createElement("div");
	
	const label = document.createElement("label");
	label.innerText = questions[i];
	div.appendChild(label);
	div.appendChild(document.createElement("br"));
	
	for (let j = 1; j <= 5; j++) {
		const input = document.createElement("input");
		input.type = "radio";
		input.name = "q" + i;
		input.value = j;
	
	const textNode = document.createTextNode(j);
	
	div.appendChild(input);
	div.appendChild(textNode);
	}
	
	container.appendChild(div);
}

function calculateScore() {
	let total = 0;
	
	for (let i = 0; i < questions.length; i++) {
		const selected = document.querySelector("input[name='q" + i + "']:checked");
		if (selected) {
			if (reverseKeyed.includes){
				total += 6 - parseInt(selected.value);
			} else {
				total += parseInt(selected.value);
			}
		}
	}
		
	document.getElementById("result").innerText = "Total Score: " + total + "/60";
		
	}
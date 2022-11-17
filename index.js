const container = document.querySelector('#container');

//Add red text
const red_content = document.createElement('div');
red_content.classList.add('content');
red_content.textContent = "Hey, I'm red";
red_content.style.color = "#ff0000";

//Append HTML with red text
container.appendChild(red_content);

//Add blue h3
const blue_head3 = document.createElement('h3');
blue_head3.classList.add('content');
blue_head3.textContent = "I'm a blue h3!";
blue_head3.style.color = "#0000ff";

//Append HTML with blue heading
container.appendChild(blue_head3);

//Add pink container div
const pink_div = document.createElement('div');
pink_div.classList.add('div');
pink_div.style.background = "#FFC0CB";
pink_div.style.height = "400px";
pink_div.style.width = "80vw";
pink_div.style.border = "5px solid black";

//Add h1 inside pink_div container
const text_h1 = document.createElement('h1');
text_h1.classList.add('h1');
text_h1.textContent = "I'm in a div";


//Append HTML with h1
pink_div.appendChild(text_h1);

//Add p inside pink_div
const p_content = document.createElement("p");
p_content.classList.add("p");
p_content.textContent = "ME TOO!";

//Append HTML with p text
pink_div.appendChild(p_content);

//Append HTML with pink_div
container.appendChild(pink_div);

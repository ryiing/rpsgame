// your JavaScript file
function alertFunction () {
    alert ('yay!');
}

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement('p');
para.setAttribute('style','color: red');
para.textContent = 'red text!';

container.appendChild(para);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
    console.log(e);
    e.target.style.background = 'blue';
});


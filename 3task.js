let button = document.getElementById('btn');

button.addEventListener('click', Pressed);
button.addEventListener('mouseenter', Hover);
button.addEventListener('mouseout', NotOnBtn);


function Pressed()
{
    console.log('I was pressed!');
}
function Hover(){
    console.log('Mouse on me!');
}
function NotOnBtn(){
    console.log('Mouse is not on me!');
}
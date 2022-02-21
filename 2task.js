let hdl= document.querySelector('h1');

hdl.style.background='green';
hdl.style.fontSize='30px';
let divPar = document.getElementById("myDiv");

divPar.children[0].style.fontWeight='bold';
divPar.children[1].style.color='red';
divPar.children[2].style.textDecoration='underline';
divPar.children[3].style.fontStyle='italic';

let list = document.querySelector("#myList");
list.children[0].style.listStyleType='none';
list.children[1].style.listStyleType='none';
list.children[2].style.listStyleType='none';


list.children[0].style.display='inline-block';
list.children[1].style.display='inline-block';
list.children[2].style.display='inline-block';

let spn = document.querySelector("span");

spn.style.opacity='0';
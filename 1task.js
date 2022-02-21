const bodyElement = document.body;

const ulElem = bodyElement.firstElementChild;
console.log('          1 way         ');

    console.log( mass(ulElem.children));

console.log('          2 way         ');

const ulSwcWay = document.querySelector('#list');
console.log(mass(ulSwcWay.children));




function mass(arr){
    
    var cons =  'Output result:  ' + 
                arr[0].textContent+' '+
                arr[4].textContent+' '+
                arr[1].textContent+' '+
                arr[3].textContent+' '+
                arr[2].textContent;
    
    return cons;
}

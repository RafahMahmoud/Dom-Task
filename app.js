// let fruits = ["banana", "blueberry", "strawberry", "peach" ,"watermelon"];
// for (let i = 0; i < fruits.length; i++) {
//     let fruit = fruits[i];
//     let li= document.createElement("li");
//     let img = document.createElement("img");
//     let fruitText = document.createTextNode(" "+fruit);
//     img.src = fruit + ".jpg";
//     img.alt = fruit;
//     img.style.width=('50px');
//     img.style.height=('50px');
//     li.appendChild(img);
//     li.appendChild(fruitText);
//     let ul = document.getElementById("list")
//    ul.appendChild(li);
// }



let array = [];
for (let i = 0; i< 5; i++) {
    var aNum = prompt('Enter a number for array');
    array[i] = aNum  
}
let num = prompt('Enter a number');
function check(array,num) {
    if (array.includes(num) == true) {
        let result = array.indexOf(num);
        return result
        
    } else {
        let result = -1;
        return result
    }
}
document.write(check(array,num))



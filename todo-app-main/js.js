const createToDo = document.querySelector('input[type="text"]');
const catSpans = document.querySelectorAll("#cat");
const getItemsLeft = document.querySelectorAll(".itemsLeft");
const getClearDone = document.querySelectorAll(".clear");
const getImgs = document.querySelectorAll("img");

let theme = 0;
const itemsLeft = [...getItemsLeft];
const clearBtns =  [...getClearDone];
const imgs = [...getImgs];
let i = 0, itemsCount = 0;
let checkboxes;
let divs;
let spans;

//change border between tasks depends on light or dark theme
function changeBorder(x){
        divs.forEach(div => {
            if(div.classList.contains("newDiv") && x == 0){
                div.classList.remove("darkBorderBottom")
                div.classList.add("lightBorderBottom");
            }
            else if(div.classList.contains("newDiv") && x == 1){
                div.classList.remove("lightBorderBottom");
                div.classList.add("darkBorderBottom");
            }
        })
    
}

//define css styles after clicking on task -> making tasks completed
function onClickAction(div){
    for(let k =  0; k < divs.length; k++){
        if(div === divs[k]){
            let index = k;
            if(index != 0 && index != 1 && index != divs.length-2 && index != divs.length-1){
                    if(!checkboxes[index-1].classList.contains("checked")){
                        checkboxes[index-1].classList.add("checked");
                        
                        spans[index-2].classList.add("done");
                        itemsCount--
                        itemsLeft.forEach((item) => {
                            item.textContent = itemsCount;
                        })

                    }
                    else{
                        checkboxes[index-1].classList.remove("checked");
                        spans[index-2].classList.remove("done");
                        itemsCount++
                        itemsLeft.forEach((item) => {
                            item.textContent = itemsCount;
                        })
                    }

                }
        }
        //action when other category "active" is choosed
        if(categorySpans[1].classList.contains("activeCategory") || categorySpans[4].classList.contains("activeCategory")){
            div.classList.add("displayNone");
        }
        //action when other category "completed" is choosed
        if(categorySpans[2].classList.contains("activeCategory") || categorySpans[5].classList.contains("activeCategory")){
            div.classList.add("displayNone");
        }
    }
}

//updating divs from .container and adding event Listener on them
function updateDivs(){
    const getDivs = document.querySelectorAll(".container div");
    const getCheckboxes = document.querySelectorAll('input[type="checkbox"');
    checkboxes = [...getCheckboxes];
    divs = [...getDivs];
    const getSpans = document.querySelectorAll("span");
    spans = [...getSpans];

    divs.forEach((div, index) => {
        let newDiv = div.classList.value;
        if(!newDiv){
            if(theme == 0){
                div.classList.add("darkBorderBottom");
            }
            else{
                div.classList.add("lightBorderBottom");
            }
            div.classList.add("newDiv");
            //action when other category "completed" is choosed
            if(categorySpans[2].classList.contains("activeCategory") || categorySpans[5].classList.contains("activeCategory")){
                div.classList.add("displayNone");
            }
            div.addEventListener('click', () => onClickAction(div))
        }
        else{
        }
        i+=1;
            
    })
}
updateDivs();

//creating new div with task and adding it to .container
function toDo() {
    let div = document.createElement('div');
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let span = document.createElement("span");
    span.textContent = createToDo.value;
    div.appendChild(checkbox);
    div.appendChild(span);
    const lastChild = document.querySelector(".container div:nth-last-child(3)");
    const container = document.querySelector(".container");
    container.insertBefore(div, lastChild);
    itemsCount++
    itemsLeft.forEach((item) => {
        item.textContent = itemsCount;
    })
}

//action after write new ToDo and click enter
createToDo.addEventListener('keyup', () => {
    if(event.keyCode == 13 && createToDo.value != ""){
        toDo();
        updateDivs(); 
        createToDo.value = "";
        if(theme == 1)
            updateColor(0);
        else if(theme == 0 )
            updateColor(1)
    }
})




//changing category between All / Active / Completed
let categorySpans = [...catSpans];
categorySpans.forEach((catspan, index) => {
    catspan.addEventListener('click', ()=>{
        if(catspan.classList.contains != 'activeCategory'){
            catspan.classList.add('activeCategory');
        }
        for(let i = 0; i < categorySpans.length; i++){
            if(categorySpans[i].classList.value == 'activeCategory' && i != index && i != index+3){
                categorySpans[i].classList.remove("activeCategory");
                
                console.log(i);
            }
            if(i == index+3){
                    categorySpans[i].classList.add("activeCategory");
                    console.log("dodane");
            }
                 
        }
        switch(index){
            case 0:
            case 3:
                for(let x = 1; x <= checkboxes.length; x++){
                    divs[x].classList.remove("displayNone");
                }
                break;
            case 1:
            case 4:
                for(let x = 1; x < checkboxes.length; x++){
                    if(checkboxes[x].classList.contains("checked")){
                        if(!divs[x+1].classList.contains("displayNone")){
                            divs[x+1].classList.add("displayNone");
                        }
                        
                    }
                    if(!checkboxes[x].classList.contains("checked")){
                        if(divs[x+1].classList.contains("displayNone")){
                            divs[x+1].classList.remove("displayNone");
                        }
                    }
                }
                break;
            case 2:
            case 5:
                console.log("poszlo");
                for(let x = 1; x < checkboxes.length; x++){
                    if(!checkboxes[x].classList.contains("checked")){
                        if(!divs[x+1].classList.contains("displayNone")){
                            divs[x+1].classList.add("displayNone");
                        }
                        
                    }
                    if(checkboxes[x].classList.contains("checked")){
                        if(divs[x+1].classList.contains("displayNone")){
                            divs[x+1].classList.remove("displayNone");
                        }
                        
                    }
                }
                break;
        }
    })
} )

// clear already done ToDos
clearBtns.forEach(clearDone => {
    clearDone.addEventListener('click', () =>{
    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].classList.contains("checked")){
            divs[i+1].remove();
            i = 0;
        }
    updateDivs();
    }
    })
})


//change theme from light to dark and from dark to light
let x = 0

function updateColor(x) {
    const getContainerDivs = document.querySelectorAll(".container div");
    if(x == 0){
        const containerDivs = [...getContainerDivs];
        containerDivs.forEach(containerDiv => {
            containerDiv.style.backgroundColor = "white";
        })


    }
    else if(x == 1){
        const containerDivs = [...getContainerDivs];
        containerDivs.forEach(containerDiv => {
            containerDiv.style.backgroundColor = "hsl(235, 24%, 19%)";
        })

    }
}

imgs[2].addEventListener('click', () => {
    if(theme == 0){
        imgs[2].setAttribute("src", "./images/icon-moon.svg");
        if(document.body.clientWidth < 1000){
            imgs[0].setAttribute("src", "./images/bg-mobile-light.jpg");
            imgs[1].setAttribute("src", "./images/bg-mobile-light.jpg");
        }
        else{
            imgs[0].setAttribute("src", "./images/bg-desktop-light.jpg");
            imgs[1].setAttribute("src", "./images/bg-desktop-light.jpg");
        }
        
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
        updateColor(theme);
        changeBorder(theme);


        theme = 1;
    }
    else if(theme == 1){
        imgs[2].setAttribute("src", "./images/icon-sun.svg");
        if(document.body.clientWidth < 1000){
            imgs[0].setAttribute("src", "./images/bg-mobile-dark.jpg");
            imgs[1].setAttribute("src", "./images/bg-desktop-dark.jpg");
        }
        else{
            imgs[0].setAttribute("src", "./images/bg-mobile-dark.jpg");
            imgs[1].setAttribute("src", "./images/bg-desktop-dark.jpg");
        }
        document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
        updateColor(theme);
        changeBorder(theme);

        theme = 0;
    }

    
})

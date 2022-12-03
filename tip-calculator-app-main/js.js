const selectTip = document.querySelectorAll(".container .left .tips .selectTip div");
const btn = document.querySelector("button");
const bill = document.querySelector(".dollar");
const people = document.querySelector(".person");
const spanAmount = document.querySelector('.tipAmount');
const spanTotal = document.querySelector('.tipTotal');
const custom = document.querySelector('.custom');
const container = document.querySelector('.container');

selectTips = [...selectTip];
let activeTip

function updateTip(percent) {
    percent = percent / 100;
    spanAmount.textContent = `$ ${(bill.value * percent).toFixed(2)}`;
    if(people.value != ""){
        spanTotal.textContent = `$ ${((bill.value * percent) + (bill.value / people.value)).toFixed(2)}`;
    }
    else{
        spanTotal.textContent = "";
        // console.log(people.value);
    }
        
}

for(let i =0; i < selectTips.length; i++){
    selectTips[i].addEventListener("click", ()=>{
        if(selectTips[i].classList.contains != "activeTip"){
            percent = selectTips[i].className;
            activeTip = percent;
            updateTip(percent);
            selectTips[i].classList.toggle("activeTip");
            for(let j = 0; j<selectTips.length; j++){
                if(j != i && selectTips[j].classList.contains('activeTip')){
                    selectTips[j].classList.toggle('activeTip');
                }
            }
            custom.value = "Custom";
        }
        
    })
}
btn.addEventListener('click', () =>{
    spanAmount.textContent = '';
    spanTotal.textContent = '';
    bill.value = '';
    people.value = '';
    for(let j = 0; j<selectTips.length; j++){
        if(selectTips[j].classList.contains('activeTip')){
            selectTips[j].classList.toggle('activeTip');
        }
    }
})
people.addEventListener('keyup', () => {
    // console.log('officer down');
    // console.log(percent);
    percent = activeTip;
    updateTip(percent);
})
bill.addEventListener('keyup', () => {

    percent = activeTip;
    if(percent)
        updateTip(percent);
})
custom.addEventListener('click', () => {
    custom.value = "";
})
custom.addEventListener('keyup', () => {
    // console.log(custom.value);
    for(let j = 0; j<selectTips.length; j++){
                if(selectTips[j].classList.contains('activeTip')){
                    selectTips[j].classList.toggle('activeTip');
                }
            }
    activeTip = custom.value;
    updateTip(custom.value);
})
// container.addEventListener('click', () => {
//     if(custom.value == "")
//         custom.value = "Custom";
// })
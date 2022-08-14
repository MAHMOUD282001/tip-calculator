let tipBtns = document.querySelectorAll(".tip button");

let bill = document.querySelector("#bill");

let peopleInput = document.querySelector("#people")

let customBtn = document.querySelector(".custom");

let zeroBtn = document.querySelector(".zero-btn")

let amountValue = document.querySelector(".amount h1")

let totalValue = document.querySelector(".total h1")

let resetBtn = document.querySelector(".reset")




let tipValue = 0


customBtn.onkeydown = function(){
    removeActive();
}

customBtn.onchange= function(){
    tipValue = customBtn.value
}

tipBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        removeActive();
        btn.classList.add("active");
        customBtn.value = "";
        tipValue = btn.innerHTML;
    })
    
})



function removeActive() {
    tipBtns.forEach(btn=>{
        btn.classList.remove("active")
    })
}



peopleInput.onkeyup = ()=>{
    if(peopleInput.value == 0){
        zeroBtn.classList.add('active')
    }
    else{
        zeroBtn.classList.remove('active')
        
        if(tipValue.includes("%")){
            tipValue = tipValue.slice(0, -1) 
        }
        
        
        amountValue.innerHTML = ((bill.value * (tipValue/100))/(peopleInput.value)).toFixed(2)
        
        let total = (bill.value / peopleInput.value) + parseFloat(amountValue.innerHTML)
        
        totalValue.innerHTML = total.toFixed(2)
        
        
    }
}


resetBtn.addEventListener("click",()=>{
    totalValue.innerHTML = "0.00"
    
    amountValue.innerHTML = "0.00"
    
    bill.value = ""
    
    peopleInput.value = ""
    
    customBtn.value = ""
    
    removeActive() 
})
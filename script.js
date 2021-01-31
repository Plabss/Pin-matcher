const generateClickBtn = document.getElementById("generate-click");
generateClickBtn.addEventListener("click", function () {
    var pin = Math.floor(1000 + Math.random() * 9000);
    var pinDisplay = document.getElementById("pin-display");
    pinDisplay.value = pin;
    document.getElementById("number-display").value="";

    const wrong=document.getElementById("wrong");
    const correct=document.getElementById("correct");
    wrong.style.display="none";
    correct.style.display="none";

    document.getElementById("actionLeft").style.display="block";
    document.getElementById("action").innerText="3";

    wrong.innerText="❌ Pin Didn't Match, Please try again";
    correct.innerText="✅ Pin Matched... Secret door is opening for you";
})

function clickOnNumber(idName){
    const Btn=document.getElementById(idName);
    Btn.addEventListener("click",function(){
    var numberDisplayValue=document.getElementById("number-display").value;
    numberDisplayValue=numberDisplayValue+Btn.innerText;
    document.getElementById("number-display").value=numberDisplayValue;
})
}
clickOnNumber("one");
clickOnNumber("two");
clickOnNumber("three");
clickOnNumber("four");
clickOnNumber("five");
clickOnNumber("six");
clickOnNumber("seven");
clickOnNumber("eight");
clickOnNumber("nine");
clickOnNumber("zero");

const deleteLast=document.getElementById("dlt-last");
deleteLast.addEventListener("click",function(){
    var numberDisplayValue=document.getElementById("number-display").value;
    numberDisplayValue=numberDisplayValue.slice(0,-1);
    document.getElementById("number-display").value=numberDisplayValue;
})

const deleteDisplay=document.getElementById("dlt-display");
deleteDisplay.addEventListener("click",function(){
    var numberDisplayValue=document.getElementById("number-display").value;
    numberDisplayValue="";
    document.getElementById("number-display").value=numberDisplayValue;
})

submitBtn=document.getElementById("submit-button");
submitBtn.addEventListener("click",function(){
    const pinDisplay=parseInt(document.getElementById("pin-display").value);
    const numberDisplay=parseInt(document.getElementById("number-display").value);
    document.getElementById("number-display").value="";
    //document.getElementById("pin-display").value="";
    var wrong=document.getElementById("wrong");
    const correct=document.getElementById("correct");
    var action=parseInt(document.getElementById("action").innerText);
    if(pinDisplay==numberDisplay){
        if(action>0){
        correct.style.display="block";
        wrong.style.display="none";
        document.getElementById("actionLeft").style.display="none";
        }
    }
    else{
        wrong.style.display="block";
        correct.style.display="none";
        if(action>0){
            action--;
            document.getElementById("action").innerText=action;
        }
        else if(action<=0){
            document.getElementById("actionLeft").style.display="none";
            wrong.style.display="block";
            wrong.innerText="Please generate new pin."

        }
    }
})


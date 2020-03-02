// item adding event handler 

 //Item Adding handler
 const plusBtn = document.getElementById("plus");
 plusBtn.addEventListener('click', function(){
    itemAddCounter("itemAmount");

    var priceAmountNumber = 1219;
    const itemAmount = document.getElementById("itemAmount").value;
    const itemNumber = parseFloat(itemAmount);
    const priceAmountTotal =  itemNumber * priceAmountNumber;
    document.getElementById("priceAmount").innerText = priceAmountTotal;
    
    const subTotal = priceAmountTotal + parseFloat(document.getElementById("priceCaseAmount").innerText);
    document.getElementById("subTotal").innerText =  subTotal;

 })

 //Item Removing handler
 const minusBtn = document.getElementById("minus");
 minusBtn.addEventListener('click', function(){
    itemRemoveCounter("itemAmount");

    var priceAmountNumber = 1219;
    const itemAmount = document.getElementById("itemAmount").value;
    const itemNumber = parseFloat(itemAmount);
    const priceAmountTotal =  itemNumber * priceAmountNumber;
    document.getElementById("priceAmount").innerText = priceAmountTotal;
    document.getElementById("subTotal").innerText =  priceAmountTotal;

    const subTotal = priceAmountTotal - parseFloat(document.getElementById("priceCaseAmount").innerText);
    document.getElementById("subTotal").innerText =  subTotal;
    document.getElementById("total").innerText =  subTotal;
 })

 //Item CasePlus handler
 const itemCasePlusBtn = document.getElementById("itemCaseAdd");
 itemCasePlusBtn.addEventListener('click', function(){
    itemAddCounter("itemCaseAmount");

    var priceAmountNumber = 59;
    const itemAmount = document.getElementById("itemCaseAmount").value;
    const itemNumber = parseFloat(itemAmount);
    const priceAmountTotal =  itemNumber * priceAmountNumber;
    document.getElementById("priceCaseAmount").innerText = priceAmountTotal;
    //document.getElementById("subTotal").innerText =  priceAmountTotal;
    const subTotal = priceAmountTotal + parseFloat(document.getElementById("priceAmount").innerText);
    document.getElementById("subTotal").innerText =  subTotal;
    document.getElementById("total").innerText =  subTotal;

    // let subTotalPrice = document.getElementById("subTotal").innerText;
    // document.getElementById("subTotal").innerText = parseInt(subTotalPrice)  +  parseInt(priceAmountTotal);

 
 })

  //Item CaseMinus handler
 const itemCaseMinusBtn = document.getElementById("itemCaseMinus");
 itemCaseMinusBtn.addEventListener('click', function(){
    itemRemoveCounter("itemCaseAmount");

    var priceAmountNumber = 59;
    const itemAmount = document.getElementById("itemCaseAmount").value;
    const itemNumber = parseFloat(itemAmount);
    const priceAmountTotal =  itemNumber * priceAmountNumber;
    document.getElementById("priceCaseAmount").innerText = priceAmountTotal;
    document.getElementById("subTotal").innerText =  priceAmountTotal;

    const subTotal = priceAmountTotal - parseFloat(document.getElementById("priceAmount").innerText);
    document.getElementById("subTotal").innerText =  subTotal;
    document.getElementById("total").innerText =  subTotal;
    document.getElementById("total").innerText =  subTotal;
 })

 function itemAddCounter(id){
    const itemAmount = document.getElementById(id).value;
    const itemNumber = parseFloat(itemAmount);
    const totalItem = itemNumber + 1;
    document.getElementById(id).value = totalItem;
 }

 function itemRemoveCounter(id){
    const itemAmount = document.getElementById(id).value;
    const itemNumber = parseFloat(itemAmount);
    const totalItem = itemNumber - 1;
    document.getElementById(id).value = totalItem;
 }
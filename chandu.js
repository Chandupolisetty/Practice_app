function calculate() {
    total = document.getElementById("total").value;
    console.log(typeof total);
    rate = parseFloat(document.getElementById("rate").value)
    if (total && rate != 0) {
        document.getElementById("tip").innerHTML = "$" + total * (rate / 100);
        document.getElementById("tax").innerHTML = "$" + total * 0.055;
        document.getElementById("grandtotal").innerHTML = "$" + ( parseInt(total) + parseInt(total * (rate / 100)) + parseFloat(total * 0.055));
    }else{
        alert("Enter correct values")
    }
  
    return false;
}
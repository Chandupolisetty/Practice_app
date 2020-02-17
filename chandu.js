function calculate(){
    let total = parseFloat(document.getElementById("total").value);
    console.log(typeof total);
    let rate = parseFloat(document.getElementById("rate").value);
    if (total == "" || rate == ""){
        alert("hey dummy you forgot something");
    }
    document.getElementById("tip").innerHTML = "$" + total*(rate/100);
    document.getElementById("tax").innerHTML = "$" + total*0.055;
    document.getElementById("grandtotal").innerHTML = "$" + (total + total*(rate/100) + (total*0.055));
    return false;
}
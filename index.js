var specialChars = "!@#$%^&*()_+~'\"|:',.`"
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var numberChars = "1234567890"

function create(){
    var length = parseInt(prompt("Please enter a password length between 8-128 characters"))
    if (length < 8 || length > 128 || isNaN(length)){
        alert("Invalid input")
        create()
        return
    }
    
    var result = ""
  
    var useSpecialChars =  String(prompt("Would you like special characters")).toLowerCase()
    if (useSpecialChars  === "yes" || useSpecialChars ==="yea"){
       result += specialChars
    }
    var useUpperChars = String(prompt("Would you like to use upper case characters?")).toLowerCase()
    
    if (useUpperChars === "yes" || useUpperChars === "yea"){
        result += upperChars
    }
    var useLowerChars = String(prompt("Would you like to use lower case characters?")).toLowerCase()
    if (useLowerChars === "yes" || useLowerChars === "yea")
        result +=lowerChars
    
    var useNumberChars = String(prompt("Would you like to use numbers?")).toLowerCase()
    if (useNumberChars === "yes" || useNumberChars ==="yea")
        result += numberChars 
    
    
    let outcome = ""

    for(var i=0; i < length; i++){
        let poop = Math.floor(Math.random() * result.length) 
        outcome += result.charAt(poop) 
        
    } 
    // var text = document.querySelector(".potato")
    document.getElementById("potato").value = outcome

    console.log(outcome)
}
var copy = function() {
    var copier = document.getElementById("potato") 
    navigator.clipboard.writeText(copier.value)
    alert("Copied!")

}

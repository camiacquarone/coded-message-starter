function translateNumbers(encodedInput){
    // empty string
    let result = ""
     for (let i = 0; i < encodedInput.length; i++) {
        if (encodedInput.charAt(i) == '3'){
            result += 'w'
        }
        else if (encodedInput.charAt(i) == '7'){
            result += 'l'  
        }
        else{
            result = result + encodedInput.charAt(i)
         }
}
        return result;

}

function reverseWords(InputMessage) {
    const stringArray = InputMessage.split("")
    stringArray.reverse();
    let result2 = stringArray.join(""); 
    return result2 

    
}

function shiftCharacters(InputMessage2,shift){
    let result3 = ""
    
    for (let i = 0; i < InputMessage2.length; i++) {
    let char = InputMessage2[i]; 
    let aCode = InputMessage2.charCodeAt(i); //ascii value 

        if(aCode >= 65 && aCode <=90){
            result3+= String.fromCharCode((aCode-65-shift+26)%26+65); 

        }
        else if (aCode >= 97 && aCode <=122){
            result3+= String.fromCharCode((aCode-97-shift+26)%26+97); 

        }
        else{
            result3 += char
        }

    }
    return result3


}


document.getElementById("decodeButton").addEventListener("click", function(){
        const encodedMessage = document.getElementById("encodedInput").value; 
        const InputMessage =  translateNumbers(encodedMessage); 
        const InputMessage2 = reverseWords(InputMessage);
        const InputMessage3 = shiftCharacters(InputMessage2,3);
        document.getElementById("decodedOutput").innerText = InputMessage3;
        }); 

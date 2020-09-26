const test = document.querySelectorAll('#test path');
for(let i = 0 ; i < test.length; i++){
    console.log("letter" +  i + "is " + test[i].getTotalLength());
}
function getTextArea(){
    const editor = document.getElementById('editor')
    return editor
}

document.getElementById("bold-button").addEventListener("click", function () {
    const getTextBox = document.getElementById("editor");
    getTextBox.classList.toggle("text-bold");
});

document.getElementById('italic-button').addEventListener('click', function(){
    const getTextBox = getTextArea();
    getTextBox.classList.toggle('text-italic')
})

document.getElementById('underline-button').addEventListener('click', function(){
    const getTextBox = getTextArea();
    getTextBox.classList.toggle('text-underline')
})

document.getElementById('color').addEventListener('change', function(event){
    const getTextBox = getTextArea();
    getTextBox.style.color = event.target.value;
})

document.getElementById('text-left').addEventListener('click', function(){
    const getTextBox = getTextArea();
    getTextBox.classList.toggle('text-left')
})

document.getElementById('text-center').addEventListener('click', function(){
    const getTextBox = getTextArea();
    getTextBox.classList.toggle('text-center')
})

document.getElementById('text-justify').addEventListener('click', function(){
    const getTextBox = getTextArea();
    getTextBox.classList.toggle('text-justify')
})

document.getElementById('text-right').addEventListener('click', function(){
    const getTextBox = getTextArea();
    getTextBox.classList.toggle('text-right')
})

document.getElementById('capital').addEventListener('click',function(){
    const  getTextBox = getTextArea();
    getTextBox.classList.toggle('text-transform')
})

const getSelectOption = document.getElementById('font');
getSelectOption.addEventListener('change', function(){
    const fontValue = getSelectOption.value;
    const getTextBox = getTextArea();
    getTextBox.style.fontSize = fontValue;
    console.log(fontValue);

})
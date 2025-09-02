document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const myParagraph = document.getElementById('myParagraph');

    myButton.addEventListener('click', () => {
        myParagraph.textContent = 'The text has been changed by JavaScript!';
    });
});
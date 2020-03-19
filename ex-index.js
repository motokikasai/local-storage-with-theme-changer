const count = document.querySelector('[data-count]'); // HTML element, its value is 0
const button = document.querySelector('button');

// Is there any value in the local storage?
const initialCountValue = localStorage.getItem('countValue');
// null -> if doesnt exist
// value -> if it does

console.log(initialCountValue);

if (initialCountValue) {
    // Update the UI count
    count.innerText = initialCountValue;
}

button.addEventListener('click', (e) => {
    let countValue = parseInt(count.innerText, 10) + 1;
    count.innerText = countValue;

    // Save to locall storage
    localStorage.setItem('countValue', countValue);
});

document.getElementById('mainRange').addEventListener('input', function() {
    document.getElementById('targetText').value = this.value
    this.style.setProperty('--value', this.value + '%');
});

document.getElementById('targetText').addEventListener('input', function() {
    const min = 0.1;
    const max = 100;
    let value = parseFloat(this.value);

    if (value < min) {
        value = min;
    } else if (value > max) {
        value = max;
    }

    this.value = value;
});

function roll(){
    const min = 0;
    const max = 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);

    const range = document.getElementById('mainRange');
    const arrow = document.getElementById('arrow');
    const rangeWidth = range.offsetWidth;
    const value = (randomNum - min) / (max - min);
    const arrowPosition = value * rangeWidth;

    arrow.style.left = `calc(${arrowPosition}px + ${range.offsetLeft}px)`;
    arrow.style.display = 'block';
}
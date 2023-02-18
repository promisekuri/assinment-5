let serial=0;

document.getElementById('triangle-btn').addEventListener('click', function () {
    serial = serial+1;
    const inputTriangleOne = document.getElementById('input-triangle-one');
    const fieldValueOne = parseInt(inputTriangleOne.value);
    const inputTrianleTwo = document.getElementById('input-triangle-two');
    const fieldValueTwo = parseInt(inputTrianleTwo.value);
    console.log(serial);
    const area = 0.5 * fieldValueOne * fieldValueTwo;
    const mathType = document.getElementById('math-type').innerText;
    displayData(mathType, area)
})
document.getElementById('rectangle-btn').addEventListener('click', function () {

    serial = serial+1;
    const inputRectangleOne = document.getElementById('input-rectangle-one');
    const fieldValueOne = parseInt(inputRectangleOne.value);
    const inputRectanleTwo = document.getElementById('input-rectangle-two');
    const fieldValueTwo = parseInt(inputRectanleTwo.value);

    const area = fieldValueOne * fieldValueTwo;
    const mathType = document.getElementById('math-type-rec').innerText;
    displayData(mathType, area)
})
document.getElementById('parallel-btn').addEventListener('click', function () {

    serial = serial+1;
    const inputParallelOne = document.getElementById('input-parallel-one');
    const fieldValueOne = parseInt(inputParallelOne.value);
    const inputParallelTwo = document.getElementById('input-parallel-two');
    const fieldValueTwo = parseInt(inputParallelTwo.value);

    const area = fieldValueOne * fieldValueTwo;
    const mathType = document.getElementById('math-type-parallel').innerText;
    displayData(mathType, area)
})
document.getElementById('rhombus-btn').addEventListener('click', function () {

    serial = serial+1;
    const inputRhombusOne = document.getElementById('input-rhombus-one');
    const fieldValueOne = parseInt(inputRhombusOne.value);
    const inputRhombusTwo = document.getElementById('input-rhombus-two');
    const fieldValueTwo = parseInt(inputRhombusTwo.value);

    const area = 0.5 * fieldValueOne * fieldValueTwo;
    const mathType = document.getElementById('math-type-rhombus').innerText;
    displayData(mathType, area)
})
document.getElementById('pentagon-btn').addEventListener('click', function () {

    serial = serial+1;
    const inputPentagonOne = document.getElementById('input-pentagon-one');
    const fieldValueOne = parseInt(inputPentagonOne.value);
    const inputPentagonTwo = document.getElementById('input-pentagon-two');
    const fieldValueTwo = parseInt(inputPentagonTwo.value);

    const area = 0.5 * fieldValueOne * fieldValueTwo;
    const mathType = document.getElementById('math-type-pentagon').innerText;
    displayData(mathType, area);
})
document.getElementById('parallelo-btn').addEventListener('click', function () {

    serial = serial+1;
    const inputParalleloOne = document.getElementById('input-parallelo-one');
    const fieldValueOne = parseInt(inputParalleloOne.value);
    const inputParalleloTwo = document.getElementById('input-parallelo-two');
    const fieldValueTwo = parseInt(inputParalleloTwo.value);

    const area = (3.14 * fieldValueOne * fieldValueTwo).toFixed(2);
    const mathType = document.getElementById('math-type-parallelo').innerText;
    displayData(mathType, area);
})



function displayData(mathType, area) {
    const tr = document.createElement('tr');
    const container = document.getElementById('table-container')
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${mathType}</td>
        <td>${area}cm<sup>2</sup></td>
        <td><button class="btn btn-primary btn-sm">Convert to m<sup>2</sup></button></td>
        `;
    container.appendChild(tr);
}


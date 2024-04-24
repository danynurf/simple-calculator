const btnCalculator = [
    {
        key: 'AC',
        value: 'clear',
        type: 'clear'
    },
    {
        key: '%',
        value: '%',
        type: 'operator'
    },
    {
        key: '/',
        value: '/',
        type: 'operator'
    },
    {
        key: '*',
        value: '*',
        type: 'operator'
    },
    {
        key: '7',
        value: '7',
        type: 'number'
    },
    {
        key: '8',
        value: '8',
        type: 'number'
    },
    {
        key: '9',
        value: '9',
        type: 'number'
    },
    {
        key: '-',
        value: '-',
        type: 'operator'
    },
    {
        key: '4',
        value: '4',
        type: 'number'
    },
    {
        key: '5',
        value: '5',
        type: 'number'
    },
    {
        key: '6',
        value: '6',
        type: 'number'
    },
    {
        key: '+',
        value: '+',
        type: 'operator'
    },
    {
        key: '1',
        value: '1',
        type: 'number'
    },
    {
        key: '2',
        value: '2',
        type: 'number'
    },
    {
        key: '3',
        value: '3',
        type: 'number'
    },
    {
        key: '&equals;',
        value: '=',
        type: 'operator'
    },
    {
        key: '0',
        value: '0',
        type: 'number'
    },
    {
        key: '.',
        value: '.',
        type: 'operator'
    },
]

const calcBtnWrapper = document.getElementById('calcBtnWrapper')

btnCalculator.forEach((elem) => {
    const btnCalcKey = document.createElement('button')
    const btnElem = {}
    btnCalcKey.classList.add('calc-btn--item')
    btnCalcKey.innerHTML = elem.key
    
    if(elem.type !== 'number') {
        btnCalcKey.classList.add('operator-btn')
    }
    if(elem.value === '0') {
        btnCalcKey.classList.add('btn-0')
    }

    calcBtnWrapper.appendChild(btnCalcKey)
})

const calcProcess = document.getElementById('calcProcess');

calcBtnWrapper.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const getValue = e.target.innerText;
        const operator = ['+', '-', '/', '*'];
        calcProcess.innerText += getValue
        
        if(getValue === 'AC') {
            calcProcess.innerText = ''
            return;
        } else if(getValue === '=') {
            let calc = calcProcess.innerText;
            calc = calc.substring(0, calc.length - 1);
            if(operator.includes(calc[calc.length - 1])) {
                calc = calc.substring(0, calc.length - 1);
            }
            let result = eval(calc);
            calcProcess.innerText = result;
            return;              
        }

        const prev = calcProcess.innerText[calcProcess.innerText.length - 2];
        const incoming = calcProcess.innerText[calcProcess.innerText.length - 1];
        const size = calcProcess.innerText.length;
        
        if(operator.includes(prev) && operator.includes(incoming)) {
            calcProcess.innerText = calcProcess.innerText.substring(0, size - 1);
        }
    }
})
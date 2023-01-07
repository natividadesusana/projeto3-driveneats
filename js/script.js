function selectedFirst(selectedOption) {
    const select = document.querySelector('.foods .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function selectedSecond(selectedOption) {
    const select = document.querySelector('.drinks .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function selectedThird(selectedOption) {
    const select = document.querySelector('.desserts .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function finalizeOrder() {
    const foodSession = document.querySelector('.foods .selecting');
    const drinksSession = document.querySelector('.drinks .selecting');
    const dessertsSession = document.querySelector('.desserts .selecting');
    const finishButton = document.querySelector('.finalize-order');
    if (foodSession !== null && drinksSession !== null && dessertsSession !== null) {
        finishButton.innerHTML = 'Fechar pedido';
        finishButton.classList.add('selected-button');
        finishButton.disabled = false;
    }
}


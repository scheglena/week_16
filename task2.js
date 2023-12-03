const formElement = document.getElementById('registrationForm');
const formInputs = formElement.querySelectorAll('.form-input');
const checkbox = document.getElementById('agreement');
const errorDiv = document.querySelector('.errorsInfo');

let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.patternMismatch) {
        showError(input, 'Неверный формат заполнения');
    }

    if (validity.rangeOverflow) {
        showError(input, 'Значение превосходит максимально допустимое');
    }

    if (validity.rangeUnderflow) {
        showError(input, 'Значение меньше минимально допустимого');
    }

    if (validity.stepMismatch) {
        showError(input, 'Недопустимое значение в соответствии с шагом');
    }

    if (validity.tooLong) {
        showError(input, 'Значение слишком длинное');
    }

    if (validity.tooShort) {
        showError(input, 'Значение слишком короткое');
    }

    if (validity.valueMissing) {
        showError(input, 'Необходимо заполнить поле');
    }
}

function showError(input, message) {
    input.classList.add('error');
    const errorSpan = document.getElementById(`${input.id}-error`);
    errorSpan.textContent = message;
    errors.push(message);
}

function clearError(input) {
    input.classList.remove('error');
    const errorSpan = document.getElementById(`${input.id}-error`);
    errorSpan.textContent = '';
}

function clearErrors() {
    errors = [];
    errorDiv.innerHTML = '';

    formInputs.forEach((input) => {
        clearError(input);
    });

    clearError(checkbox);
}

function checkAll() {
    formInputs.forEach((input) => {
        checkValidity(input);
    });

    // Проверка чекбокса
    if (!checkbox.checked) {
        showError(checkbox, 'Необходимо согласие на обработку данных');
    }

    errorDiv.innerHTML = errors.join('. \n');
}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();
    checkAll();

    if (errors.length === 0) {
        console.log(getFormValues());
        this.reset();
    }
});

formInputs.forEach((input) => {
    input.addEventListener('input', function () {
        clearError(input);
        checkValidity(input);
    });
});

checkbox.addEventListener('change', function () {
    clearError(checkbox);
});

function getFormValues() {
    const formData = new FormData(formElement);
    const values = {};

    formData.forEach((value, key) => {
        values[key] = value;
    });

    return values;
}

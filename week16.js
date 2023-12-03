//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById('practicum');

function makeOne() {
    const forms = document.forms;
    const numberOfForms = forms.length;
    
    paragraph.textContent = `Количество найденных форм: ${numberOfForms}`;
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {
    const firstForm = document.forms[0];
    const formName = firstForm ? firstForm.getAttribute('name') : null;
    paragraphTwo.textContent = formName ? `Значение атрибута "name" первой формы: ${formName}` : 'Формы не найдены.';
}

document.querySelector('.b-2').onclick = makeTwo;


//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
    const forms = document.forms;
    const lastFormIndex = forms.length - 1;
    const lastForm = forms[lastFormIndex];

    if (lastForm) {
        const formName = lastForm.getAttribute('name');
        paragraphThree.textContent = `Значение атрибута "name" последней формы: ${formName}`;
    } else {
        paragraphThree.textContent = 'Формы не найдены.';
    }
}

document.querySelector('.b-3').onclick = makeThree;


//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById('practicum4');

function makeFour() {
    const forms = document.forms;
    const formNames = [];

    for (const form of forms) {
        const formName = form.getAttribute('name');
        formNames.push(formName);
    }

    const formattedFormNames = formNames.join(', ');

    paragraphFour.textContent = `Названия форм: ${formattedFormNames}`;
}

document.querySelector('.b-4').onclick = makeFour;


//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById('practicum5');

function makeFive() {
    const forms = document.forms;
    const thirdFormIndex = 2; 
    const thirdForm = forms[thirdFormIndex];

    if (thirdForm) {
        const numberOfElements = thirdForm.elements.length;
        paragraphFive.textContent = `Количество элементов в третьей форме: ${numberOfElements}`;
    } else {
        paragraphFive.textContent = 'Третья форма не найдена.';
    }
}

document.querySelector('.b-5').onclick = makeFive;


//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById('practicum6');

function makeSix() {
    const forms = document.forms;
    const secondFormName = 'formTwo';
    
    for (const form of forms) {
        if (form.getAttribute('name') === secondFormName) {
            const numberOfElements = form.elements.length;
            paragraphSix.textContent = `Количество элементов во второй форме: ${numberOfElements}`;
            return;
        }
    }

    paragraphSix.textContent = 'Вторая форма не найдена.';
}

document.querySelector('.b-6').onclick = makeSix;


//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {
    const forms = document.forms;
    const secondFormIndex = 1; 
    
    if (forms.length > secondFormIndex) {
        const secondForm = forms[secondFormIndex];
        const formElements = secondForm.elements;
        let elementsList = '';

        for (const element of formElements) {
            elementsList += `-${element.name}`;
        }

        paragraphSeven.textContent = `Названия элементов второй формы: ${elementsList.slice(1)}`;
    } else {
        paragraphSeven.textContent = 'Вторая форма не найдена.';
    }
}

document.querySelector('.b-7').onclick = makeSeven;


//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById('practicum8');

function makeEight() {
    const forms = document.forms;
    const firstFormIndex = 0; 

    if (forms.length > firstFormIndex) {
        const firstForm = forms[firstFormIndex];
        const formElements = firstForm.elements;
        let elementsList = '';

        for (const element of formElements) {
            elementsList += `-${element.name}`;
        }

        paragraphEight.textContent = `Названия элементов первой формы: ${elementsList.slice(1)}`;
    } else {
        paragraphEight.textContent = 'Первая форма не найдена.';
    }
}

document.querySelector('.b-8').onclick = makeEight;


//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById('practicum9');

function makeNine() {
    const forms = document.forms;
    const thirdFormIndex = 2; 

    if (forms.length > thirdFormIndex) {
        const thirdForm = forms[thirdFormIndex];
        const formElements = thirdForm.elements;
        let elementsList = '';

        for (const element of formElements) {
            elementsList += `-${element.name}`;
        }

        paragraphNine.textContent = `Названия элементов третьей формы: ${elementsList.slice(1)}`;
    } else {
        paragraphNine.textContent = 'Третья форма не найдена.';
    }
}

document.querySelector('.b-9').onclick = makeNine;


//Задание 10
//Выведите на экран значенеие radio кнопки четвёртой формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки


const paragraphTen = document.getElementById('practicum10');

function makeTen() {
    const forms = document.forms;
    const fourthForm = forms[3];

    if (fourthForm) {
        const radioValue = fourthForm.elements.fourthName.value;
        paragraphTen.textContent = `Значение radio кнопки четвёртой формы: ${radioValue}`;
    } else {
        paragraphTen.textContent = 'Форма не найдена.';
    }
}

document.querySelector('.b-10').onclick = makeTen;


//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById('practicum11');

function makeEleven() {
    const forms = document.forms;
    const firstForm = forms[0];

    if (firstForm) {
        const selectElement = firstForm.elements.firstSelect;
        const optionsValues = [];

        for (let i = 0; i < selectElement.options.length; i++) {
            const optionValue = selectElement.options[i].value;
            optionsValues.push(optionValue);
        }

        const optionsString = optionsValues.join(', ');
        paragraphEleven.textContent = `Значения всех опций первой формы: ${optionsString}`;
    } else {
        paragraphEleven.textContent = 'Форма не найдена.';
    }
}

document.querySelector('.b-11').onclick = makeEleven;


//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы


const paragraphTwelve = document.getElementById('practicum12');

function makeTwelve() {
    const forms = document.forms;
    const secondForm = forms.formTwo; 

    if (secondForm) {
        const checkboxes = secondForm.elements.checkboxOne; 
        const checkboxesIds = [];

        for (let i = 0; i < checkboxes.length; i++) {
            const checkboxId = checkboxes[i].id;
            checkboxesIds.push(checkboxId);
        }

        const checkboxesIdsString = checkboxesIds.join(', ');
        paragraphTwelve.textContent = `Значения атрибутов id всех чекбоксов второй формы: ${checkboxesIdsString}`;
    } else {
        paragraphTwelve.textContent = 'Форма не найдена.';
    }
}

document.querySelector('.b-12').onclick = makeTwelve;



// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById('practicum13');

function checkButton() {
    const forms = document.forms;
    const fourthForm = forms.lastForm; 

    if (fourthForm) {
        const radioButton = fourthForm.elements.fourthName;

        if (radioButton.checked) {
            paragraphThirteen.textContent = 'Кнопка выбрана';
        } else {
            paragraphThirteen.textContent = 'Кнопка не выбрана';
        }
    } else {
        paragraphThirteen.textContent = 'Форма не найдена.';
    }
}

document.querySelector('.b-13').addEventListener('click', checkButton);



//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById('practicum14');

function checkOption() {
    const forms = document.forms;
    const firstForm = forms.formOne; 
    const selectElement = firstForm.elements.firstSelect; 

    if (selectElement) {
        selectElement.selectedIndex = 1; 

        const selectedOptionValue = selectElement.value;

        if (selectedOptionValue === 'Опция 1') {
            paragraphFourteen.textContent = 'Выбран первый вариант';
        } else if (selectedOptionValue === 'Опция 2') {
            paragraphFourteen.textContent = 'Выбран второй вариант';
        } else if (selectedOptionValue === 'Опция 3') {
            paragraphFourteen.textContent = 'Выбран третий вариант';
        } else {
            paragraphFourteen.textContent = 'Выбран неизвестный вариант';
        }
    } else {
        paragraphFourteen.textContent = 'Форма не найдена.';
    }
}

document.querySelector('.b-14').onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
	//Ваш код
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
	//Ваш код
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки

	//Ваш код
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки
	//Ваш код
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

//const selectElement = //Ваш код

// selectElement.onchange = function () {
// 	//Ваш код
// };

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

//const emailInput = //Ваш код
const errorMessage = document.getElementById('errorMessage');

emailInput.oninput = function () {
	//Ваш код
};

//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector('.b-21').onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {
		//Ваш код
	} else {
		document.getElementById('result21').textContent = 'Проверка пройдена';
	}
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector('.b-22').onclick = function (event) {
	const nameInput = document.forms.formThree.elements.thirdName;

	if (nameInput.value.trim() === '') {
		//Ваш код
	} else {
		document.getElementById('result22').textContent = 'Проверка пройдена';
	}
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled

//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"
//Подсказка: для установки атрибута используйте методы forEach и setAttribute

document.querySelector('.b-24').onclick = function () {
	//Ваш код
};

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').onclick = function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			//Ваш код
		});

		input.addEventListener('blur', function () {
			//Ваш код
		});
	});
};

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').onclick = function (event) {
	event.preventDefault();
	//Ваш код
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');

formTwoInputs.forEach(function (input) {
	input.addEventListener('input', function () {
		//Ваш код
	});
});

//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById('firstSelect');

selectFormThree.addEventListener('change', function () {
	//Ваш код
});

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = form.elements.thirdName;
const emailInputThree = form.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
	event.preventDefault();

	if (nameInputThree.value && emailInputThree.value) {
		//Ваш код
	} else {
		console.log('Пожалуйста, заполните все поля формы.');
	}
}

formThree.addEventListener('submit', handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById('result30');

formTwo.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
	const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);

	//Ваш код
}

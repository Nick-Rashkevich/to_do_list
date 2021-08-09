//ROOT
const root = document.querySelector('#root')

//DATA
const todos = [
    {
        title: 'Загаловок дела N1',
        text: 'Подробное описание задачи, которое может состоять из неограниченного количества слов.',
        time: '14:00',
    },
    {
        title: 'Загаловок дела N2',
        text: 'Подробное описание задачи, которое может состоять из неограниченного количества слов.',
        time: '15:00',
    },
]

//APP
render(todos)
createInput()

function createCard(content) {
    const card = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const cardText = document.createElement('p')
    const cardTime = document.createElement('p')

    card.className = 'flex flex-col w-80 h-48 bg-indigo-300 m-auto mt-4 p-2 shadow-lg rounded-lg text-justify'
    cardTitle.className = 'text-2xl'
    cardText.className = 'pt-2 h-full overflow-hidden'
    cardTime.className = 'italic'

    cardTitle.textContent = content.title
    cardText.textContent = content.text
    cardTime.textContent = content.time

    root.className = 'flex flex-col'
    card.append(cardTitle, cardText, cardTime)
    root.append(card)
}

function render(model) {
    model.forEach(someObj => {
        createCard(someObj)
    });
}

function createInput() {
    const inputWindow = document.createElement('div')
    const inputWindowElem = document.createElement('input')
    const inputWindowInputButton = document.createElement('Button')

    inputWindow.className = 'm-auto mt-4 text-end'
    inputWindowElem.className = 'rounded-lg border-2 bg-indigo-300 mr-1'
    inputWindowInputButton.className = 'p-0.5 rounded-lg border-2 bg-indigo-300 text-sm font-bold italic'
    inputWindowInputButton.type = 'submit'
    inputWindowInputButton.textContent = 'Отправить дело'

    inputWindow.append(inputWindowElem, inputWindowInputButton)
    root.append(inputWindow)
}
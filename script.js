const draggable_list = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos', 'Bill Gates', 'Bernard Arnault', 'Mark Zuckerberg', 'Warren Buffett', 'Larry Ellison', 'Steve Ballmer', 'Larry Page', 'Sergey Brin', 'Amancio Ortega'
];

// Store List Items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...richestPeople]
    .map(a => ({
            value: a,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {

            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
}

import Button from './components/Button.js';
import Card from './components/Card.js';
import Table from './components/Table.js';

const app = document.getElementById('app');

const card = Card({
    title: 'Card Title',
    description: 'This is a description of the card.',
    image: 'https://via.placeholder.com/150',
});

const card2 = Card({
    title: 'Card Title Number 2',
    description: 'This is a description of the card Number 2.',
    image: 'https://via.placeholder.com/150',
});

const table = Table({
    columns: ['Name', 'Age', 'City'],
    data: [
        { Name: 'Ahmed Gomaa', Age: 25, City: 'Giza' },
        { Name: 'Ali Nour', Age: 30, City: 'Cairo' },
        { Name: 'Omar Hassan', Age: 35, City: 'Alexandria' },
    ],
});

const table2 = Table({
    columns: ['Name', 'Age', 'City'],
    data: [
        { Name: 'Ahmed Gomaa', Age: 25, City: 'Giza' },
        { Name: 'Ali Nour', Age: 30, City: 'Cairo' },
        { Name: 'Omar Hassan', Age: 35, City: 'Alexandria' },
    ],
});

const button = Button({
    text: 'Click Me',
    onClick: () => alert('Button Clicked!'),
    variant: 'primary',
    disabled: false,
});
const button2 = Button({
    text: 'Click Me I\'m Buttom Number',
    onClick: () => alert('Button Clicked!'),
    variant: 'primary',
    disabled: false,
});

app.appendChild(card);
app.appendChild(card2);
app.appendChild(table);
app.appendChild(table2);
app.appendChild(button);
app.appendChild(button2);
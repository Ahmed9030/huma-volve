
import Button from './components/Button.js';
import Card from './components/Card.js';
import Table from './components/Table.js';

const app = document.getElementById('app');

const card = Card({
    title: 'Card Title',
    description: 'This is a description of the card.',
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

const button = Button({
    text: 'Click Me',
    onClick: () => alert('Button Clicked!'),
    variant: 'primary',
    disabled: false,
});

app.appendChild(card);
app.appendChild(table);
app.appendChild(button);
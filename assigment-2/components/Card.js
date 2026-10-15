export default function Card({title , description, image , children}){
    const card = document.createElement('div');
    card.className = 'card';

    if (image){
        const cardImage = document.createElement('img');
        cardImage.src = image;
        cardImage.alt = title;
        card.appendChild(cardImage);
    }

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    card.appendChild(cardDescription);

    if (children){
        card.appendChild(children);
    }

    return card;
}
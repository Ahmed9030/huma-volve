export default function Button({text, onClick ,variant , disabled = true}) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = `button ${variant}`;
    button.disabled = disabled;
    button.addEventListener('click', onClick);

    return button;
}


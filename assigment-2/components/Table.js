export default function Table({columns, data , striped = true}) {
    const table = document.createElement('table');
    table.className = 'table';

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    columns.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    //create table body
    const tbody = document.createElement('tbody');

    data.forEach(rowDate => {
        const row = document.createElement('tr');

        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = rowDate[col];
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    
    if (striped) {
        table.classList.add('striped');
    };

    return table;
}
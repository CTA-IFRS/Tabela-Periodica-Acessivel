const groups = 
{
    "Nonmetal": { color: "#d1ecf1", elements: [] },
    "Noble Gas": { color: "#f8d7da", elements: [] },
    "Alkali Metal": { color: "#d4edda", elements: [] },
    "Alkaline Earth Metal": { color: "#fff3cd", elements: [] },
    "Metalloid": { color: "#e2e3e5", elements: [] },
    "Halogen": { color: "#f5c6cb", elements: [] }
};

const elements = 
[
    { symbol: 'H', name: 'Hydrogen', atomic: 1, group: 'Nonmetal', period: 1, col: 1 },
    { symbol: 'He', name: 'Helium', atomic: 2, group: 'Noble Gas', period: 1, col: 18 },
    { symbol: 'Li', name: 'Lithium', atomic: 3, group: 'Alkali Metal', period: 2, col: 1 },
    { symbol: 'Be', name: 'Beryllium', atomic: 4, group: 'Alkaline Earth Metal', period: 2, col: 2 },
    { symbol: 'B', name: 'Boron', atomic: 5, group: 'Metalloid', period: 2, col: 13 },
    { symbol: 'C', name: 'Carbon', atomic: 6, group: 'Nonmetal', period: 2, col: 14 },
    { symbol: 'N', name: 'Nitrogen', atomic: 7, group: 'Nonmetal', period: 2, col: 15 },
    { symbol: 'O', name: 'Oxygen', atomic: 8, group: 'Nonmetal', period: 2, col: 16 },
    { symbol: 'F', name: 'Fluorine', atomic: 9, group: 'Halogen', period: 2, col: 17 },
    { symbol: 'Ne', name: 'Neon', atomic: 10, group: 'Noble Gas', period: 2, col: 18 },
    { symbol: 'Na', name: 'Sodium', atomic: 11, group: 'Alkali Metal', period: 3, col: 1 },
    { symbol: 'Mg', name: 'Magnesium', atomic: 12, group: 'Alkaline Earth Metal', period: 3, col: 2 },
    { symbol: 'Al', name: 'Aluminum', atomic: 13, group: 'Post-transition Metal', period: 3, col: 13 },
    { symbol: 'Si', name: 'Silicon', atomic: 14, group: 'Metalloid', period: 3, col: 14 },
    { symbol: 'P', name: 'Phosphorus', atomic: 15, group: 'Nonmetal', period: 3, col: 15 },
    { symbol: 'S', name: 'Sulfur', atomic: 16, group: 'Nonmetal', period: 3, col: 16 },
    { symbol: 'Cl', name: 'Chlorine', atomic: 17, group: 'Halogen', period: 3, col: 17 },
    { symbol: 'Ar', name: 'Argon', atomic: 18, group: 'Noble Gas', period: 3, col: 18 },
    { symbol: 'K', name: 'Potassium', atomic: 19, group: 'Alkali Metal', period: 4, col: 1 },
    { symbol: 'Ca', name: 'Calcium', atomic: 20, group: 'Alkaline Earth Metal', period: 4, col: 2 },
    { symbol: 'Sc', name: 'Scandium', atomic: 21, group: 'Transition Metal', period: 4, col: 3 },
    { symbol: 'Ti', name: 'Titanium', atomic: 22, group: 'Transition Metal', period: 4, col: 4 },
    { symbol: 'V', name: 'Vanadium', atomic: 23, group: 'Transition Metal', period: 4, col: 5 },
    { symbol: 'Cr', name: 'Chromium', atomic: 24, group: 'Transition Metal', period: 4, col: 6 },
    { symbol: 'Mn', name: 'Manganese', atomic: 25, group: 'Transition Metal', period: 4, col: 7 },
    { symbol: 'Fe', name: 'Iron', atomic: 26, group: 'Transition Metal', period: 4, col: 8 },
    { symbol: 'Co', name: 'Cobalt', atomic: 27, group: 'Transition Metal', period: 4, col: 9 },
    { symbol: 'Ni', name: 'Nickel', atomic: 28, group: 'Transition Metal', period: 4, col: 10 },
    { symbol: 'Cu', name: 'Copper', atomic: 29, group: 'Transition Metal', period: 4, col: 11 },
    { symbol: 'Zn', name: 'Zinc', atomic: 30, group: 'Transition Metal', period: 4, col: 12 },
    { symbol: 'Ga', name: 'Gallium', atomic: 31, group: 'Post-transition Metal', period: 4, col: 13 },
    { symbol: 'Ge', name: 'Germanium', atomic: 32, group: 'Metalloid', period: 4, col: 14 },
    { symbol: 'As', name: 'Arsenic', atomic: 33, group: 'Metalloid', period: 4, col: 15 },
    { symbol: 'Se', name: 'Selenium', atomic: 34, group: 'Nonmetal', period: 4, col: 16 },
    { symbol: 'Br', name: 'Bromine', atomic: 35, group: 'Halogen', period: 4, col: 17 },
    { symbol: 'Kr', name: 'Krypton', atomic: 36, group: 'Noble Gas', period: 4, col: 18 },
    // Continue adding elements up to atomic number 118
];

let currentView = 'grid';
let currentFiltered = elements.slice();

$(document).ready(function () {
    // Populate filter
    const groupKeys = Object.keys(groups).sort();
    groupKeys.forEach(group => 
    {
        $('#groupFilter').append(`<option value="${group}">${group}</option>`);
    });

    $('#toggleViewBtn').on('click', function () 
    {
        currentView = currentView === 'grid' ? 'list' : 'grid';
        $(this).text(currentView === 'grid' ? 'Alterar visualização para lista' : 'Alterar visualização para tabela');
        
        renderTable(currentFiltered);
    });

    // Render table
    function renderTable(filtered = elements) 
    {
        const $grid = $(".periodic-table").empty().toggleClass("d-none", currentView === 'list');
        const $list = $(".list-view").empty().toggleClass("d-none", currentView === 'grid');

        filtered.forEach((el) => 
        {
            if (currentView === 'grid') 
            {
                const $div = $(`
                <div class="element" role="button" tabindex="0"
                    aria-label="${el.name}, symbol ${el.symbol}, atomic number ${el.atomic}"
                    style="grid-column: ${el.col}; background-color: ${groups[el.group]?.color || '#f8f9fa'};">
                    <span class="symbol">${el.symbol}</span>
                    <div>${el.name}</div>
                    <small>#${el.atomic}</small>
                </div>
                `);

                $div.on('click keypress', function (e) {
                    if (e.type === "click" || e.key === "Enter" || e.key === " ") 
                    {
                        showModal(el);
                    }
                });

                $grid.append($div);
            } 
            else 
            {
                const $item = $(`
                <div class="list-group-item list-group-item-action" role="listitem" tabindex="0">
                    <strong>${el.atomic}. ${el.name} (${el.symbol})</strong><br>
                    <small>Group: ${el.group}, Period: ${el.period}</small>
                </div>
                `);

                $item.on('click keypress', function (e) {
                    if (e.type === "click" || e.key === "Enter" || e.key === " ") 
                    {
                        showModal(el);
                    }
                });

                $list.append($item);
            }
        });

        if (filtered.length === 1) 
        {
            const focusTarget = currentView === 'grid' ? $grid.find(".element") : $list.find(".list-group-item");

            focusTarget?.focus();
        }
    }

    function showModal(element) 
    {
        originElement = document.activeElement; // Store the element that triggered the modal

        $('#elementModalLabel').text(`${element.name} (${element.symbol})`);
        $('#elementDetails').html(`
            <strong>Atomic Number:</strong> ${element.atomic}<br>
            <strong>Group:</strong> ${element.group}<br>
            <strong>Period:</strong> ${element.period}<br>
        `);

        const modal = new bootstrap.Modal('#elementModal');
        modal.show();
    }

    $('#elementModal').on('hidden.bs.modal', function () 
    {
        if (originElement) 
        {
            originElement.focus();
            originElement = null;
        }
    });

    function filterElements() {
        const groupVal = groupFilter.value;
        const nameVal = nameFilter.value.trim().toLowerCase();

        currentFiltered = elements.filter(el => 
        {
            const matchesGroup = groupVal === "" || el.group === groupVal;
            const matchesName = nameVal === "" || el.name.toLowerCase().includes(nameVal);
            return matchesGroup && matchesName;
        });

        renderTable(currentFiltered);
    }

    $('#groupFilter').on('change', filterElements);
    $('#nameFilter').on('input', filterElements);

    renderTable();
});
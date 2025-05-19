const series = 
{
    "Não Metal": { color: "#72E534", elements: [] },
    "Gás Nobre": { color: "#5914C0", elements: [] },
    "Metal Alcalino": { color: "#FF7327", elements: [] },
    "Metal Alcalino Terroso": { color: "#FFC800", elements: [] },
    "Metal de Transição": { color: "#D41414", elements: [] },
    "Outros Metais": { color: "#A5E1C7", elements: [] },
    "Lantanídeo": { color: "#CA57A6", elements: [] },
    "Actinídeo": { color: "#AC51CD", elements: [] },
    "Halogênio": { color: "#2193DB", elements: [] },
};

const elementos = 
[
    {simbolo: 'H', nome: 'Hidrogênio', numero: 1, massa: 1.008,  serie: 'Hidrogênio', linha: 1, coluna: 1,},
    {simbolo: 'He', nome: 'Hélio', numero: 2, massa: 4.003,  serie: 'Gás Nobre', linha: 1, coluna: 18},
    {simbolo: 'Li', nome: 'Lítio', numero: 3, massa: 6.941,  serie: 'Metal Alcalino', linha: 2, coluna: 1},
    {simbolo: 'Be', nome: 'Berílio', numero: 4, massa: 9.012,  serie: 'Metal Alcalino Terroso', linha: 2, coluna: 2},
    {simbolo: 'B', nome: 'Boro', numero: 5, massa: 10.811,  serie: 'Não Metal', linha: 2, coluna: 13},
    {simbolo: 'C', nome: 'Carbono', numero: 6, massa: 12.011,  serie: 'Não Metal', linha: 2, coluna: 14},
    {simbolo: 'N', nome: 'Nitrogênio', numero: 7, massa: 14.007,  serie: 'Não Metal', linha: 2, coluna: 15},
    {simbolo: 'O', nome: 'Oxigênio', numero: 8, massa: 15.999,  serie: 'Não Metal', linha: 2, coluna: 16},
    {simbolo: 'F', nome: 'Flúor', numero: 9, massa: 18.998,  serie: 'Halogênio', linha: 2, coluna: 17},
    {simbolo: 'Ne', nome: 'Neônio', numero: 10, massa: 20.18,  serie: 'Gás Nobre', linha: 2, coluna: 18},
    {simbolo: 'Na', nome: 'Sódio', numero: 11, massa: 22.99,  serie: 'Metal Alcalino', linha: 3, coluna: 1},
    {simbolo: 'Mg', nome: 'Magnésio', numero: 12, massa: 24.305,  serie: 'Metal Alcalino Terroso', linha: 3, coluna: 2},
    {simbolo: 'Al', nome: 'Alumínio', numero: 13, massa: 26.982,  serie: 'Outros Metais', linha: 3, coluna: 13},
    {simbolo: 'Si', nome: 'Silício', numero: 14, massa: 28.086,  serie: 'Não Metal', linha: 3, coluna: 14},
    {simbolo: 'P', nome: 'Fósforo', numero: 15, massa: 30.974,  serie: 'Não Metal', linha: 3, coluna: 15},
    {simbolo: 'S', nome: 'Enxofre', numero: 16, massa: 32.065,  serie: 'Não Metal', linha: 3, coluna: 16},
    {simbolo: 'Cl', nome: 'Cloro', numero: 17, massa: 35.453,  serie: 'Halogênio', linha: 3, coluna: 17},
    {simbolo: 'Ar', nome: 'Argônio', numero: 18, massa: 39.948,  serie: 'Gás Nobre', linha: 3, coluna: 18},
    {simbolo: 'K', nome: 'Potássio', numero: 19, massa: 39.098,  serie: 'Metal Alcalino', linha: 4, coluna: 1},
    {simbolo: 'Ca', nome: 'Cálcio', numero: 20, massa: 40.078,  serie: 'Metal Alcalino Terroso', linha: 4, coluna: 2},
    {simbolo: 'Sc', nome: 'Escândio', numero: 21, massa: 44.956,  serie: 'Metal de Transição', linha: 4, coluna: 3},
    {simbolo: 'Ti', nome: 'Titânio', numero: 22, massa: 47.867,  serie: 'Metal de Transição', linha: 4, coluna: 4},
    {simbolo: 'V', nome: 'Vanádio', numero: 23, massa: 50.942,  serie: 'Metal de Transição', linha: 4, coluna: 5},
    {simbolo: 'Cr', nome: 'Cromo', numero: 24, massa: 51.996,  serie: 'Metal de Transição', linha: 4, coluna: 6},
    {simbolo: 'Mn', nome: 'Manganês', numero: 25, massa: 54.938,  serie: 'Metal de Transição', linha: 4, coluna: 7},
    {simbolo: 'Fe', nome: 'Ferro', numero: 26, massa: 55.845,  serie: 'Metal de Transição', linha: 4, coluna: 8},
    {simbolo: 'Co', nome: 'Cobalto', numero: 27, massa: 58.933,  serie: 'Metal de Transição', linha: 4, coluna: 9},
    {simbolo: 'Ni', nome: 'Níquel', numero: 28, massa: 58.693,  serie: 'Metal de Transição', linha: 4, coluna: 10},
    {simbolo: 'Cu', nome: 'Cobre', numero: 29, massa: 63.546,  serie: 'Metal de Transição', linha: 4, coluna: 11},
    {simbolo: 'Zn', nome: 'Zinco', numero: 30, massa: 65.409,  serie: 'Metal de Transição', linha: 4, coluna: 12},
    {simbolo: 'Ga', nome: 'Gálio', numero: 31, massa: 69.723,  serie: 'Outros Metais', linha: 4, coluna: 13},
    {simbolo: 'Ge', nome: 'Germânio', numero: 32, massa: 72.64,  serie: 'Outros Metais', linha: 4, coluna: 14},
    {simbolo: 'As', nome: 'Arsênio', numero: 33, massa: 74.922,  serie: 'Não Metal', linha: 4, coluna: 15},
    {simbolo: 'Se', nome: 'Selênio', numero: 34, massa: 78.96,  serie: 'Não Metal', linha: 4, coluna: 16},
    {simbolo: 'Br', nome: 'Bromo', numero: 35, massa: 79.904,  serie: 'Halogênio', linha: 4, coluna: 17},
    {simbolo: 'Kr', nome: 'Criptônio', numero: 36, massa: 83.798,  serie: 'Gás Nobre', linha: 4, coluna: 18},
    {simbolo: 'Rb', nome: 'Rubídio', numero: 37, massa: 85.468,  serie: 'Metal Alcalino', linha: 5, coluna: 1},
    {simbolo: 'Sr', nome: 'Estrôncio', numero: 38, massa: 87.62,  serie: 'Metal Alcalino Terroso', linha: 5, coluna: 2},
    {simbolo: 'Y', nome: 'Ítrio', numero: 39, massa: 88.906,  serie: 'Metal de Transição', linha: 5, coluna: 3},
    {simbolo: 'Zr', nome: 'Zircônio', numero: 40, massa: 91.224,  serie: 'Metal de Transição', linha: 5, coluna: 4},
    {simbolo: 'Nb', nome: 'Nióbio', numero: 41, massa: 92.906,  serie: 'Metal de Transição', linha: 5, coluna: 5},
    {simbolo: 'Mo', nome: 'Molibdênio', numero: 42, massa: 95.94,  serie: 'Metal de Transição', linha: 5, coluna: 6},
    {simbolo: 'Tc', nome: 'Tecnécio', numero: 43, massa: '[98]',  serie: 'Metal de Transição', linha: 5, coluna: 7},
    {simbolo: 'Ru', nome: 'Rutênio', numero: 44, massa: 101.07,  serie: 'Metal de Transição', linha: 5, coluna: 8},
    {simbolo: 'Rh', nome: 'Ródio', numero: 45, massa: 101.905,  serie: 'Metal de Transição', linha: 5, coluna: 9},
    {simbolo: 'Pd', nome: 'Paládio', numero: 46, massa: 106.42,  serie: 'Metal de Transição', linha: 5, coluna: 10},
    {simbolo: 'Ag', nome: 'Prata', numero: 47, massa: 107.868,  serie: 'Metal de Transição', linha: 5, coluna: 11},
    {simbolo: 'Cd', nome: 'Cádmio', numero: 48, massa: 112.411,  serie: 'Metal de Transição', linha: 5, coluna: 12},
    {simbolo: 'In', nome: 'Índio', numero: 49, massa: 114.818,  serie: 'Outros Metais', linha: 5, coluna: 13},
    {simbolo: 'Sn', nome: 'Estanho', numero: 50, massa: 118.71,  serie: 'Outros Metais', linha: 5, coluna: 14},
    {simbolo: 'Sb', nome: 'Antimônio', numero: 51, massa: 121.76,  serie: 'Outros Metais', linha: 5, coluna: 15},
    {simbolo: 'Te', nome: 'Telúrio', numero: 52, massa: 127.6,  serie: 'Não Metal', linha: 5, coluna: 16},
    {simbolo: 'I', nome: 'Iodo', numero: 53, massa: 126.904,  serie: 'Halogênio', linha: 5, coluna: 17},
    {simbolo: 'Xe', nome: 'Xenônio', numero: 54, massa: 131.293,  serie: 'Gás Nobre', linha: 5, coluna: 18},
    {simbolo: 'Cs', nome: 'Césio', numero: 55, massa: 132.905,  serie: 'Metal Alcalino', linha: 6, coluna: 1},
    {simbolo: 'Ba', nome: 'Bário', numero: 56, massa: 137.327,  serie: 'Metal Alcalino Terroso', linha: 6, coluna: 2},
    {simbolo: 'La', nome: 'Lantânio', numero: 57, massa: 138.905,  serie: 'Lantanídeo', linha: 8, coluna: 4},
    {simbolo: 'Ce', nome: 'Cério', numero: 58, massa: 140.116,  serie: 'Lantanídeo', linha: 8, coluna: 5},
    {simbolo: 'Pr', nome: 'Praseodímio', numero: 59, massa: 140.908,  serie: 'Lantanídeo', linha: 8, coluna: 6},
    {simbolo: 'Nd', nome: 'Neodímio', numero: 60, massa: 144.242,  serie: 'Lantanídeo', linha: 8, coluna: 7},
    {simbolo: 'Pm', nome: 'Promécio', numero: 61, massa: '[145]',  serie: 'Lantanídeo', linha: 8, coluna: 8},
    {simbolo: 'Sm', nome: 'Samário', numero: 62, massa: 150.36,  serie: 'Lantanídeo', linha: 8, coluna: 9},
    {simbolo: 'Eu', nome: 'Európio', numero: 63, massa: 151.964,  serie: 'Lantanídeo', linha: 8, coluna: 10},
    {simbolo: 'Gd', nome: 'Gadolínio', numero: 64, massa: 157.25,  serie: 'Lantanídeo', linha: 8, coluna: 11},
    {simbolo: 'Tb', nome: 'Térbio', numero: 65, massa: 158.925,  serie: 'Lantanídeo', linha: 8, coluna: 12},
    {simbolo: 'Dy', nome: 'Disprósio', numero: 66, massa: 162.5,  serie: 'Lantanídeo', linha: 8, coluna: 13},
    {simbolo: 'Ho', nome: 'Hólmio', numero: 67, massa: 164.930,  serie: 'Lantanídeo', linha: 8, coluna: 14},
    {simbolo: 'Er', nome: 'Érbio', numero: 68, massa: 167.259,  serie: 'Lantanídeo', linha: 8, coluna: 15},
    {simbolo: 'Tm', nome: 'Túlio', numero: 69, massa: 168.934,  serie: 'Lantanídeo', linha: 8, coluna: 16},
    {simbolo: 'Yb', nome: 'Itérbio', numero: 70, massa: 173.04,  serie: 'Lantanídeo', linha: 8, coluna: 17},
    {simbolo: 'Lu', nome: 'Lutécio', numero: 71, massa: 174.967,  serie: 'Lantanídeo', linha: 8, coluna: 18},
    {simbolo: 'Hf', nome: 'Háfnio', numero: 72, massa: 178.49,  serie: 'Metal de Transição', linha: 6, coluna: 4},
    {simbolo: 'Ta', nome: 'Tântalo', numero: 73, massa: 180.948,  serie: 'Metal de Transição', linha: 6, coluna: 5},
    {simbolo: 'W', nome: 'Tungstênio', numero: 74, massa: 183.84,  serie: 'Metal de Transição', linha: 6, coluna: 6},
    {simbolo: 'Re', nome: 'Rênio', numero: 75, massa: 186.207,  serie: 'Metal de Transição', linha: 6, coluna: 7},
    {simbolo: 'Os', nome: 'Ósmio', numero: 76, massa: 190.23,  serie: 'Metal de Transição', linha: 6, coluna: 8},
    {simbolo: 'Ir', nome: 'Irídio', numero: 77, massa: 192.217,  serie: 'Metal de Transição', linha: 6, coluna: 9},
    {simbolo: 'Pt', nome: 'Platina', numero: 78, massa: 195.84,  serie: 'Metal de Transição', linha: 6, coluna: 10},
    {simbolo: 'Au', nome: 'Ouro', numero: 79, massa: 196.967,  serie: 'Metal de Transição', linha: 6, coluna: 11},
    {simbolo: 'Hg', nome: 'Mercúrio', numero: 80, massa: 200.59,  serie: 'Metal de Transição', linha: 6, coluna: 12},
    {simbolo: 'Tl', nome: 'Tálio', numero: 81, massa: 204.383,  serie: 'Outros Metais', linha: 6, coluna: 13},
    {simbolo: 'Pb', nome: 'Chumbo', numero: 82, massa: 207.2,  serie: 'Outros Metais', linha: 6, coluna: 14},
    {simbolo: 'Bi', nome: 'Bismuto', numero: 83, massa: 208.98,  serie: 'Outros Metais', linha: 6, coluna: 15},
    {simbolo: 'Po', nome: 'Polônio', numero: 84, massa: '[209]',  serie: 'Outros Metais', linha: 6, coluna: 16},
    {simbolo: 'At', nome: 'Ástato', numero: 85, massa: '[210]',  serie: 'Halogênio', linha: 6, coluna: 17},
    {simbolo: 'Rn', nome: 'Radônio', numero: 86, massa: '[220]',  serie: 'Gás Nobre', linha: 6, coluna: 18},
    {simbolo: 'Fr', nome: 'Frâncio', numero: 87, massa: '[223]',  serie: 'Metal Alcalino', linha: 7, coluna: 1},
    {simbolo: 'Ra', nome: 'Rádio', numero: 88, massa: '[226]',  serie: 'Metal Alcalino Terroso', linha: 7, coluna: 2},
    {simbolo: 'Ac', nome: 'Actínio', numero: 89, massa: '[227]',  serie: 'Actinídeo', linha: 9, coluna: 4},
    {simbolo: 'Th', nome: 'Tório', numero: 90, massa: 232.03806,  serie: 'Actinídeo', linha: 9, coluna: 5},
    {simbolo: 'Pa', nome: 'Protactínio', numero: 91, massa: 231.03588,  serie: 'Actinídeo', linha: 9, coluna: 6},
    {simbolo: 'U', nome: 'Urânio', numero: 92, massa: 238.02891,  serie: 'Actinídeo', linha: 9, coluna: 7},
    {simbolo: 'Np', nome: 'Netúnio', numero: 93, massa: '[237]',  serie: 'Actinídeo', linha: 9, coluna: 8},
    {simbolo: 'Pu', nome: 'Plutônio', numero: 94, massa: '[244]',  serie: 'Actinídeo', linha: 9, coluna: 9},
    {simbolo: 'Am', nome: 'Amerício', numero: 95, massa: '[243]',  serie: 'Actinídeo', linha: 9, coluna: 10},
    {simbolo: 'Cm', nome: 'Cúrio', numero: 96, massa: '[247]',  serie: 'Actinídeo', linha: 9, coluna: 11 },
    {simbolo: 'Bk', nome: 'Berquélio', numero: 97, massa: '[247]',  serie: 'Actinídeo', linha: 9, coluna: 12},
    {simbolo: 'Cf', nome: 'Califórnio', numero: 98, massa: '[251]',  serie: 'Actinídeo', linha: 9, coluna: 13},
    {simbolo: 'Es', nome: 'Einsténio', numero: 99, massa: '[252]',  serie: 'Actinídeo', linha: 9, coluna: 14},
    {simbolo: 'Fm', nome: 'Férmio', numero: 100, massa: '[257]',  serie: 'Actinídeo', linha: 9, coluna: 15}, 
    {simbolo: 'Md', nome: 'Mendelévio', numero: 101, massa: '[258]',  serie: 'Actinídeo', linha: 9, coluna: 16}, 
    {simbolo: 'No', nome: 'Nobélio', numero: 102, massa: '[259]',  serie: 'Actinídeo', linha: 9, coluna: 17}, 
    {simbolo: 'Lr', nome: 'Laurêncio', numero: 103, massa: '[262]',  serie: 'Actinídeo', linha: 9, coluna: 18},
    {simbolo: 'Rf', nome: 'Rutherfórdio', numero: 104, massa: '[261]',  serie: 'Metal de Transição', linha: 7, coluna: 4}, 
    {simbolo: 'Db', nome: 'Dúbnio', numero: 105, massa: '[262]',  serie: 'Metal de Transição', linha: 7, coluna: 5}, 
    {simbolo: 'Sg', nome: 'Seabórgio', numero: 106, massa: '[266]',  serie: 'Metal de Transição', linha: 7, coluna: 6}, 
    {simbolo: 'Bh', nome: 'Bóhrio', numero: 107, massa: '[270]',  serie: 'Metal de Transição', linha: 7, coluna: 7}, 
    {simbolo: 'Hs', nome: 'Hássio', numero: 108, massa: '[277]',  serie: 'Metal de Transição', linha: 7, coluna: 8}, 
    {simbolo: 'Mt', nome: 'Meitnério', numero: 109, massa: '[270]',  serie: 'Metal de Transição', linha: 7, coluna: 9}, 
    {simbolo: 'Ds', nome: 'Darmstádio', numero: 110, massa: '[271]',  serie: 'Metal de Transição', linha: 7, coluna: 10}, 
    {simbolo: 'Rg', nome: 'Roentgênio', numero: 111, massa: '[272]',  serie: 'Metal de Transição', linha: 7, coluna: 11}, 
    {simbolo: 'Cn', nome: 'Copernício', numero: 112, massa: '[277]',  serie: 'Metal de Transição', linha: 7, coluna: 12}, 
    {simbolo: 'Nh', nome: 'Nihônio', numero: 113, massa: '[286]',  serie: 'Outros Metais', linha: 7, coluna: 13}, 
    {simbolo: 'Fl', nome: 'Fleróvio', numero: 114, massa: '[289]',  serie: 'Outros Metais', linha: 7, coluna: 14}, 
    {simbolo: 'Mc', nome: 'Moscóvio', numero: 115, massa: '[288]',  serie: 'Outros Metais', linha: 7, coluna: 15}, 
    {simbolo: 'Lv', nome: 'Livermório', numero: 116, massa: '[293]',  serie: 'Outros Metais', linha: 7, coluna: 16}, 
    {simbolo: 'Ts', nome: 'Tenessino', numero: 117, massa: '[294]',  serie: 'Halogênio', linha: 7, coluna: 17}, 
    {simbolo: 'Og', nome: 'Oganessônio', numero: 118, massa: '[294]',  serie: 'Gás Nobre', linha: 7, coluna: 18},
];

let vizualizacaoAtual = 'grid';
let filtroAtual = elementos.slice();

//se o documento estiver carregado
$(document).ready(function () {
    //adiciona as séries no select do filtro
    const seriesKeys = Object.keys(series).sort();
    seriesKeys.forEach(serie => {
        $('#filtroSerie').append(`<option value="${serie}">${serie}</option>`);
    });

    //muda a visualização da tabela entre grid e lista
    $('#toggleViewBtn').on('click', function () {
        //caso já esteja como grid, mude para lista e vice versa
        if (vizualizacaoAtual === 'grid') {
            vizualizacaoAtual = 'list';
        } else {
            vizualizacaoAtual = 'grid';
        }

        //altera texto do btn
        if (vizualizacaoAtual === 'grid') {
            $(this).text('Alterar visualização para lista');
        } else {
            $(this).text('Alterar visualização para tabela');
        }
        
        exibeTabela(filtroAtual);
    });

    //função para exibir os elementos
    function exibeTabela(filtrados = elementos) {   
        //prepara o modo de visualização Grid
        const $grid = $(".periodic-table").empty().toggleClass("d-none", vizualizacaoAtual === 'list');

        //prepara o modo de visualização Lista
        const $list = $(".list-view").empty().toggleClass("d-none", vizualizacaoAtual === 'grid');

        //para cada elemento, exiba...
        filtrados.forEach((el) => {
            //caso seja grid
            if (vizualizacaoAtual === 'grid') {   
                //construção da div (btn) do elemento na tabela
                const $div = $(`
                <div class="elemento" role="button" tabindex="0"
                    aria-label="${el.nome}, simbolo ${el.simbolo}, numero atomico ${el.numero}"
                    style="grid-column: ${el.coluna}; grid-row: ${el.linha}; background-color: ${series[el.serie]?.color || '#f8f9fa'};">
                    <span class="simbolo">${el.simbolo}</span>
                    <div>${el.nome}</div>
                    <small>${el.numero}</small>
                </div>
                `);

                //identifica que se for click ou key press mostra a modal do elemento para exibir modal
                $div.on('click keypress', function (e) {
                    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
                        exibeModal(el);
                    }
                });

                $grid.append($div);
            } 

            //caso lista
            else 
            {   
                //construção da div do elemento da tabela por lista
                const $item = $(`
                <div class="list-group-item list-group-item-action" role="listitem" tabindex="0">
                    <strong>${el.numero}. ${el.nome} (${el.simbolo})</strong>
                    <br>
                    <small>Série: ${el.serie}</small>
                </div>
                `);

                //identifica que se for click ou key press mostra a modal do elemento para exibir modal
                $item.on('click keypress', function (e) {
                    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
                        exibeModal(el);
                    }
                });

                $list.append($item);
            }
        });


        //grava onde está o foco
        if (filtrados.length === 1) 
        {
            const focusTarget = vizualizacaoAtual === 'grid' ? $grid.find(".elemento") : $list.find(".list-group-item");

            focusTarget?.focus();
        }
    }

    function exibeModal(elemento) {
        //elemento acionado -> elemento que deve retirar os dados
        elementoFonte = document.activeElement; 
        
        //texto da modal (header)
        $('#elementModalLabel').text(`${elemento.nome} (${elemento.simbolo})`); 
        
        //conteúdo interno (caixa)
        $('#elementDetails').html(`
            <strong>Número Atômico:</strong> ${elemento.numero}<br>
            <strong>Série:</strong> ${elemento.serie}<br>
        `);

        const modal = new bootstrap.Modal('#elementModal');
        modal.show();
    }

    //retorna foco para onde estava depois de fechar modal
    $('#elementModal').on('hidden.bs.modal', function () {
        if (elementoFonte) {
            elementoFonte.focus();
            elementoFonte = null;
        }
    });

    function elementosFiltrados() {
        const serieValor = filtroSerie.value;
        const valorNome = nomeFiltro.value.trim().toLowerCase();

        filtroAtual = elementos.filter(el => {
            //se a série for vazia (todos) ou se for de determinada série
            const igualSerie = serieValor === "" || el.serie === serieValor;

            //se o nome for vazio (todos) ou se for o texto dizitado (ignora maiúscula/minúscula)
            const igualNome = valorNome === "" || el.nome.toLowerCase().includes(valorNome);

            return igualSerie && igualNome;
        });

        exibeTabela(filtroAtual);
    }

    $('#filtroSerie').on('change', elementosFiltrados);
    $('#nomeFiltro').on('input', elementosFiltrados);

    exibeTabela();
});
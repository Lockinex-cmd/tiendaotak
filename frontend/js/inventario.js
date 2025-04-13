const url = 'http://localhost:5000/api/categorias'
fetch(url)
.then(resultado=>{
    /*console.log(resultado);*/
    return resultado.json();
})
.then(data=>{
    /*console.log(data);*/
    showndata(data)
})

function showndata(categorias) {
    const container = document.querySelector('tbody');
    container.innerHTML = ''; // limpia la tabla antes de llenarla

    categorias
        .filter(category => category.CategoriaID < 11) // 👈 esto elimina del 11 al 16
        .forEach(category => {
            const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = category;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${CategoriaID}</td>
                <td>${CategoriaNombre}</td>
                <td>${Descripcion}</td>
                <td><img src="${Imagen}" width="100px"/ class="cuenta"></td>
                <td><button class='btn color2'>Details</button></td>
                <td><button class='btn color7'>Edit</button></td>
                <td><button class='btn color1'>Delete</button></td>
            `;
            container.appendChild(row);
        });
}
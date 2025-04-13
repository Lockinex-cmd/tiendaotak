const url = 'http://localhost:5000/api/categorias'

export const obtainCategories = async ()=>{
    try {
        const resultado = await fetch(url);
        const categorias = await resultado.json();
        return categorias
    } catch (error) {
        console.error('error');
    }
}

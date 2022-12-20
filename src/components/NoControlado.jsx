import { useRef, useState } from "react";

const NoControlado = () => { 
    //useRef es una función importada desde React para hacer referencia al formulario
    //Para llevar la referencia al formulario se usa el prop de form "ref"
    const form = useRef(null);
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        //React por default envia el parametro de evento; preventDefault evita la recarga de la pagina
        e.preventDefault(); 
        setError(false)
        //formData es una forma de iterar en un formulario
        //Obtendra todo atributo del formulario que tenga el prop de name
        const data = new FormData(form.current);
        
        //Hace transformacion de los campos a un objeto
        const datos = Object.fromEntries([...data.entries()]);
        
        //Ahora se hace posible la destructura del objeto de datos
        const {title, description, state} = datos;
        
        //Validacion de datos
        if(!title.trim() || !description.trim())
            setError(true);
    }
    
    return (
        <>
            <h1>Formulario No Controlado</h1>
            <form onSubmit={handleSubmit} ref={form}>
                <input 
                    type="text" 
                    placeholder="Ingrese Tarea" 
                    className="form-control mb-2"
                    name="title"
                    defaultValue="Tarea1"
                />
                <textarea 
                    className="form-control mb-2" 
                    placeholder="Ingresar descripcion"
                    name="description"
                    defaultValue="Descripcion!"
                />
                <select className="form-select mb-2" name="state" defaultValue="completado">
                    <option value="pendiennte">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Procesar</button>

                {error && (
                            <div className="m-3 p-1 bg-danger 
                            d-flex justify-content-center text-white 
                            text-uppercase fw-bold "
                            >
                                Llena los campos
                            </div>)}
            </form>
        </>
    )
}

export default NoControlado
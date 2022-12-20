import { useState } from "react";

const Controlado = () => { 
    /*Para capturar los atrbutos del formulario tambien se puede hacer con states de React usando el prop value
    Tambien se necesita el prop onChage para realizar cambios al momento de capturar
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [state, setState] = useState('pendiente')*/

    //Para eviatr escribir state por cada input del formulario, se excriben en un solo objeto
    const [tarea, setTarea] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: true,
    });

    const {title, description, state, priority} = tarea;
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        //React por default envia el parametro de evento; preventDefault evita la recarga de la pagina
        e.preventDefault();
        setError(false);

        if(!title.trim() || !description.trim())
            setError(true);
        else
            setError(false)
    }

    //Metodo para no escribir cada atributo en el change
    const handleChange = e => {
        //Conseguir que el handleChange sea reutilizable para cualquier input en este formulario
        const {name, type, checked, value} = e.target

        setTarea({
            ...tarea,
            [name]: type=== 'checkbox'? checked : value
        });
    }
    
    return (
        <>
            <h1>Formulario Controlado</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingrese Tarea" 
                    className="form-control mb-2"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <textarea 
                    className="form-control mb-2" 
                    placeholder="Ingresar descripcion"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
                <div className="form-check mb-2">
                    <label htmlFor="inputCheck">Dar prioridad</label>
                    <input 
                        id="inputCheck" 
                        type="checkbox" 
                        name="priority" 
                        className="form-check-input" 
                        checked={priority}
                        onChange={handleChange}
                    />
                </div>
                <select 
                    className="form-select mb-2" 
                    name="state" 
                    value={state} 
                    onChange={handleChange}
                >
                    <option value="pendiennte">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Procesar</button>
                
                {error? (
                            <div className="m-3 p-1 bg-danger 
                            d-flex justify-content-center text-white 
                            text-uppercase fw-bold "
                            >
                                Llena los campos
                            </div>
                        )
                        : (
                            <div className="m-3 p-1 bg-success
                            d-flex justify-content-center text-white 
                            text-uppercase fw-bold "
                            >
                                Campos llenados correctamente
                            </div>
                        )}
            </form>
        </>
    )
}

export default Controlado
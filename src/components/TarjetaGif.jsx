import './TarjetaGif.css'
import { RiDeleteBin5Fill } from "react-icons/ri";


export const TarjetaGif = ( {img , titulo ,eliminarGifs}) => {

    return (

        <div className="tarjeta-gif">

            <img src={img} alt="" />

            <div className='tarjeta-gif__info'>
                <h2>{titulo}</h2>
                <button onClick={eliminarGifs} 
                ><RiDeleteBin5Fill/></button>
            </div>

        </div>
    )
}
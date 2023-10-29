
const Controls = ({onPrev=()=>{}, onNext=()=>{}, position=1})=> {
    return(

        <section className="flex justify-center items-center gap-10 pb-6">

            <button className="cursor-pointer" onClick={()=> { onPrev(); }}> <img src="./src/assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.png" alt="arrow back"/> </button>

            <h3 className="font-bold text-2xl"> Pregunta {position} </h3>    
            
            <button className="cursor-pointer" onClick={()=> { onNext(); }}> <img src="./src/assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png" alt="arrow back"/> </button>

        </section>

    );
}

export default Controls;
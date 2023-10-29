import Controls from "./Controls/Controls";
import Questions from "./Questions/Questions";

function Quiz({QyA=[], currentQuestion={}, onPrev=()=>{}, onNext=()=>{}, position=1}){
    return(
        <section className="flex flex-col pt-5 gap-3 items-center bg-violet-600 text-white py-8">
            {QyA.length != 0 && <Controls onPrev={onPrev} onNext={onNext} position={position}/>}

            {QyA.length != 0 && <Questions _q={currentQuestion.question} _a={[currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]} key={currentQuestion.correct_answer}/>}          
            
        </section>
    );
}

export default Quiz;
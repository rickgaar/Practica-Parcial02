import { useState } from "react";
import { getExamFromLS } from "../../service/kahootservice";
import Quiz from "../Quiz/Quiz";

const OldExams = () => {
    const [oldExamsArray, setOldExamsArray] = useState(getExamFromLS());
    let key=0;

    const keyIncrement = ()=>{
        key = key + 1;
        return key;
    }

    return(
    <section id="oldExams-section" className="flex flex-col gap-6 pt-6">

        {oldExamsArray.map((e)=>{ return <Quiz questionsArray={e} key={keyIncrement()} saveOldExams={false}/> })}

    </section>
    ); 
}
export default OldExams;
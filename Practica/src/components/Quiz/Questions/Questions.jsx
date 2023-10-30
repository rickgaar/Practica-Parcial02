import { useState } from "react";

const Questions = ({ _q = '', _a = '' , sortedAnswers=[]}) => {

    const [clicked, setClicked] = useState(false);

    const clickHandler = ()=>{
        setClicked(true);
    }

    /* sortedAnswers.map((e) => {
        console.log(e + ' y ' + _a)
    }); */

    return (
        <section className="flex flex-col items-center">
            <h2>{_q}</h2>
            <section className="grid-cols-2 grid gap-6 w-80 p-6">
                {/* <button>a. so</button>
                <button>b. pa</button>
                <button>c. que</button>
                <button>d. cito</button> */}

                {sortedAnswers.map((e) => {

                    if (e === _a) {
                        return (
                            <button key={e} onClick={clickHandler} className={`p-1 rounded ${(clicked === true) ? 'bg-green-500' : 'bg-transparent'}`}>{e}</button>
                        )
                    }
                    return (
                            <button key={e}>{e}</button>
                        )
                })}

            </section>
        </section>

    );
}

export default Questions;
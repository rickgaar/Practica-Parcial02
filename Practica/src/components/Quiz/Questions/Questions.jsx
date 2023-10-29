import { sortRandom } from "../../../service/kahootservice";

const Questions = ({ _q = '', _a = [] }) => {
    const sortedAnswers = sortRandom(_a);
    return (
        <section className="flex flex-col items-center">
            <h2>{_q}</h2>
            <section className="grid-cols-2 grid gap-6 w-80 p-6">
                {/* <button>a. so</button>
                <button>b. pa</button>
                <button>c. que</button>
                <button>d. cito</button> */}

                {sortedAnswers.map((e) => {

                    if (e === _a[0]) {
                        return (
                            <button key={e} className="correct">{e}</button>
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
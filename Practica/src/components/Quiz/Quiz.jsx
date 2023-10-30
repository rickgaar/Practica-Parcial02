import Controls from "./Controls/Controls";
import Questions from "./Questions/Questions";
import { useEffect, useState } from "react";
import { getExamFromLS, saveExamInLS } from "../../service/kahootservice";

function Quiz({ questionsArray = [] }) {

    const [QyA, setQyA] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState([]);
    const [position, setPosition] = useState(1);
    const oldExams = getExamFromLS();

    useEffect(
        () => { updateCurrentQuestion(position - 1) },
        [position]);

    useEffect(
        () => {addQyA(questionsArray)}, [questionsArray]
    );

    const updateCurrentQuestion = (pos) => {
        setCurrentQuestion(QyA[pos])
    }

    const addQyA = (QyA) => {
        console.log(questionsArray);
        setQyA([...QyA]);
        setPosition(1);
        setCurrentQuestion(QyA[0]);
        oldExams.push(QyA);
        //console.log(oldExams);
        saveExamInLS(oldExams);
    }

    const onPageChange = (_page = 0) => {

        let _position = position + _page;

        if (_position <= 0) {
            _position = 1;
        }
        console.log(QyA.length);
        if (_position > (QyA.length)) {
            _position = QyA.length;
        }

        setPosition(_position);
    }

    return (
        <section className="flex flex-col pt-5 gap-3 items-center bg-violet-600 text-white py-8">
            {QyA.length != 0 && <Controls onPrev={() => { onPageChange(-1) }} onNext={() => { onPageChange(1) }} position={position} />}

            {QyA.length != 0 && <Questions _q={currentQuestion.question} _a={[currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]} key={currentQuestion.correct_answer} />}

        </section>
    );
}

export default Quiz;
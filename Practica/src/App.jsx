import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import SearchForm from "./components/Search/SearchForm"
import Quiz from "./components/Quiz/Quiz"
import { useEffect, useState } from "react"
import { getExamFromLS, saveExamInLS } from "./service/kahootservice"
function App() {

  const [QyA, setQyA] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [position, setPosition] = useState(1);
  const oldExams = getExamFromLS();
  useEffect(
    () => { updateCurrentQuestion(position - 1) },
    [position]);

  const updateCurrentQuestion = (pos) => {
    setCurrentQuestion(QyA[pos])
  }

  const addQyA = (QyA) => {
    setQyA([...QyA]);
    setPosition(1);
    setCurrentQuestion(QyA[0]);
    oldExams.push(QyA);
    console.log(oldExams);
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
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<> <SearchForm addQyA={addQyA} /> <Quiz QyA={QyA} currentQuestion={currentQuestion} onPrev={() => { onPageChange(-1) }} onNext={() => { onPageChange(1) }} position={position} />
          </>} />
          <Route path="/past-exam" element={""} />
        </Routes>


      </BrowserRouter>

    </>
  )

}

export default App

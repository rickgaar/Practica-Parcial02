import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import SearchForm from "./components/Search/SearchForm"
import Quiz from "./components/Quiz/Quiz"
import { useEffect, useState } from "react"
import OldExams from "./components/oldExams/oldExams"
import { getExamFromLS, saveExamInLS } from "./service/kahootservice"

function App() {

  const [questionsArray, setQuestionsArray] = useState([]);
  const oldExams = getExamFromLS();

  const getQuestions = (_questions) => {
    setQuestionsArray(_questions);
  }

  useEffect(()=>{
    if(questionsArray.length != 0){
      oldExams.push(questionsArray);
      saveExamInLS(oldExams);
    }}
    ,[questionsArray]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SearchForm getQuestions={getQuestions} />
              <Quiz questionsArray={questionsArray} />
            </>
          } />
          <Route path="/past-exam" element={<OldExams />} />
        </Routes>


      </BrowserRouter>

    </>
  )

}

export default App

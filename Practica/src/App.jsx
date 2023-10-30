import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import SearchForm from "./components/Search/SearchForm"
import Quiz from "./components/Quiz/Quiz"
import { useState } from "react"
import OldExams from "./components/oldExams/oldExams"

function App() {

  const [questionsArray, setQuestionsArray] = useState([]);

  const getQuestions = (_questions) => {
    setQuestionsArray(_questions);
  }

  //sortear afuera del componente

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SearchForm getQuestions={getQuestions} />
              <Quiz questionsArray={questionsArray}/>
            </>
          } />
          <Route path="/past-exam" element={<OldExams/>} />
        </Routes>


      </BrowserRouter>

    </>
  )

}

export default App

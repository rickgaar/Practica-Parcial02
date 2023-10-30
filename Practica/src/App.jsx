import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import SearchForm from "./components/Search/SearchForm"
import Quiz from "./components/Quiz/Quiz"
import { useState } from "react"

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
          <Route path="/past-exam" element={""} />
        </Routes>


      </BrowserRouter>

    </>
  )

}

export default App

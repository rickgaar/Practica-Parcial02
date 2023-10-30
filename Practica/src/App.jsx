import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import SearchForm from "./components/Search/SearchForm"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchForm /> 
          } />
          <Route path="/past-exam" element={""} />
        </Routes>


      </BrowserRouter>

    </>
  )

}

export default App

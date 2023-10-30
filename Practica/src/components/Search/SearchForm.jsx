import { useEffect, useState } from "react";
import { fetchQuestion } from "../../service/kahootservice";
import Quiz from "../Quiz/Quiz";

const SearchForm = () => {

    const [questionsArray, setQuestionsArray] = useState([])
    const [category, setCategory] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const getData = async (e) => {
        e.preventDefault();
        /* Funcion para el fetch */
        let response = await fetchQuestion({ category });
        setQuestionsArray(response);
    }

    return (
        <section>
            <div className="bg-violet-400 w-full p-8">
                <form className="flex flex-col gap-8 items-center" onSubmit={getData}>
                    <h1 className="text-center text-white">Category</h1>
                    <select id="category" onChange={handleCategoryChange} className="h-8 w-1/2 pl-2">
                        <option value={""}>Any Category</option>
                        <option value={9}>General Knowledge</option>
                        <option value={15}>Video Games</option>
                        <option value={20}>Mythology</option>
                        <option value={29}>Comics</option>
                        <option value={12}>Music</option>
                        <option value={19}>Mathematics</option>
                    </select>
                    <button type="submit" className="bg-violet-600 p-4 rounded-md text-white">Submit</button>
                </form>

            </div>

            <Quiz questionsArray={questionsArray}/>
        </section>
    );
}

export default SearchForm;
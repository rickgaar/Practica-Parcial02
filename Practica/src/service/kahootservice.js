import axios from "axios";
export const saveExamInLS = (examenes = []) => localStorage.setItem("Examenes", JSON.stringify(examenes));
export const getExamFromLS = () => JSON.parse(localStorage.getItem("Examenes")) || [];
export const fetchQuestion = async ({ amount=10, category = 0 }) => {
    try {
        const consulta = new URLSearchParams({ amount,category});
        const { data } = await axios.get(`api.php?${consulta}`);
        const _results = data.results || [];
        return _results
    } catch (error) {
        return [];
    }
}

export const sortRandom = (Answers) => {
    return [...Answers].sort(() => Math.random() < 0.5 ? 1 : -1);
}

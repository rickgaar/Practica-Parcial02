import axios from "axios";
export const saveExamInLS = (examenes = []) => localStorage.setItem("Examenes", JSON.stringify(examenes));
export const getExamFromLS = () => localStorage.getItem("Examenes") || [];
export const fetchQuestion = async ({ amount=10, category = 0 }) => {
    try {
        const consulta = new URLSearchParams({ amount,category });
        const { data } = await axios.get(`api.php?${consulta}`);
        const _results = data.results || [];
        return _results
    } catch (error) {
        return [];
    }
}

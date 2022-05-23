import { useNavigate } from "react-router-dom";
import { goToHomePage} from "../routes/coordinator";


function ErrorPage() {
    const navigate = useNavigate()
    return(
        <>
        <h1>PAGE NOT FOUND, SORRY</h1>
        <button onclick = {() =>goToHomePage (navigate)}>Pagina Inicial</button>
        </>
    );
    
};

export default ErrorPage;
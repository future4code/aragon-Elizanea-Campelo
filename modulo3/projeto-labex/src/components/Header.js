import {useNavigate} from "react-router-dom";
import { goToHomePage, goToAdminPage } from "../routes/coordinator";

 function Header(props) {

    const navigate = useNavigate();

    const renderHeader= () => {
        switch (props.actualPage) {
            case "home-page":
                return (<button onClick={()=> goToAdminPage(navigate)}>ENTRAR</button>);
            case "admin-page":
                return (<button onClick={()=>goToHomePage(navigate) }>LOGIN</button>)    
                        
            default:
                return;
                
        };
    };
    return (<header>
        <h1> LABEX </h1>
        {renderHeader()}
        </header>);
};
export default Header;
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import { useLocation,useNavigate } from "react-router-dom";


function Tagpage(){
    const navigate=useNavigate();
    const location=useLocation();
     const tag=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div  className="page-header">
                <button onClick={()=>{navigate(-1)}} className="btn">back</button>
                <h2 className="page-heading">Blogs Tagged <span>#{tag}</span></h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default Tagpage;
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, clickhandler, totalPages,loading } = useContext(AppContext);

    if(!loading){
        return (
            <div className="pagination">
              <div className="btn-container">
                {page > 1 && (
                  <button onClick={() => clickhandler(page - 1)} className="btn">Prev</button>
                )}
        
                {
                page < totalPages && (
                  <button onClick={() => clickhandler(page + 1) } className="btn">next</button>
                )}
              </div>
        
              <div>
                Page {page} of {totalPages}
              </div>
            </div>
          );
    }
    else{
        return(
            <div></div>
        )
    }
}
export default Pagination;

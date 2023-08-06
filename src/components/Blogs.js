import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from './Spinner';
import Card from "./Card";

function Blogs(){
    const {posts,loading}=useContext(AppContext);


    return(
        <div className="blog-container">
            <div  className="blog-content">
            {   
                loading?<Spinner/>:(
                    posts.length===0?(<p>NO POST FOUND</p>):(
                        posts.map((post)=>(
                            <Card key={post.id} post={post}/>
                        ))
                    )                  
                )
                
            }
            </div>
        </div>
    )
}

export default Blogs;
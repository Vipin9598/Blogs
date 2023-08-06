import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Card from '../components/Card';
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";



function Blogpage(){
    let url="https://codehelp-apis.vercel.app/api/get-blog";
    const navigate=useNavigate();
    const location=useLocation();
    const {loading,setLoading}=useContext(AppContext);
    const [blog,setblog]=useState(null);
    const [relatedblog,setrelatedblog]=useState([]);
    const blogid=location.pathname.split("/").at(-1);

    async function fetchrelatedblogs(){
        setLoading(true);
        url=`${url}?blogId=${blogid}`;
        try{
            const res=await fetch(url);
            const data=await res.json();
            setblog(data.blog);
            setrelatedblog(data.relatedBlogs);
        }
        catch(error){
            setblog(null);
            setrelatedblog([]);

        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogid){
            fetchrelatedblogs();
        }
    },[location.pathname]);

    return(
        <div >
            
            <Header/>
            <div className="page-header">
                <button onClick={()=>navigate(-1)} className="btn">
                    back
                </button>
            </div>
            <div >
            {
                loading?<Spinner/>:
                blog?<div className="blog-content">
                    <Card post={blog}/>
                    <h2 className="page-heading">Related Blogs</h2>
                    {
                        relatedblog.map((post)=>(
                            <div key={post.id} className="blog-content">
                                <Card post={post}/>
                            </div>
                        ))
                    }
                </div>:
                <div>No Data Found</div>

            }
            </div>
            {/* <Pagination/> */}

        </div>
    )
}

export default Blogpage;
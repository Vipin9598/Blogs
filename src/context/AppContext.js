import {  createContext, useEffect, useState } from "react";
import { baseUrl } from "../Baseurl";
import { useNavigate } from "react-router-dom";


export const AppContext=createContext();

export function AppContextProvider({children}){
    const navigate=useNavigate();
    
    const [loading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const [posts,setPosts]=useState([]);



    async function fetchdata(page,tag,category){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        console.log(url)
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        
        
        try{
            const response=await fetch(url);
            const data=await response.json();
            if (!data.posts || data.posts.length === 0)
            throw new Error("Something Went Wrong");
            setTotalPages(data.totalPages);
            setPage(data.page);
            setPosts(data.posts);
            console.log(totalPages)
        }
        catch(error){
            alert('Error 404 Found!');
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

   

    function clickhandler(page){
        navigate( { search: `?page=${page}`});
        setPage(page);
    } 

    const value={
        page,
        setLoading,
        setPage,
        setPosts,
        posts,
        loading,
        totalPages,
        setTotalPages,
        clickhandler,
        fetchdata
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}


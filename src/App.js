import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes, useSearchParams,useLocation } from "react-router-dom";
import Home from './pages/Home';
import Tagpage from './pages/Tagpage';
import CategoryPage from './pages/CategoryPage';
import Blogpage from './pages/Blogpage';
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  
  const {fetchdata} =useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page =  searchParams.get("page") ?? 1;
    if(location.pathname.includes("tag")){
      const tag=location.pathname.split('/').at(-1).replace("-"," ");
      fetchdata(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split('/').at(-1).replace("-"," ");
      fetchdata(Number(page),null,category);
    }
    else{
      fetchdata(Number(page));
    }
  },[location.pathname,location.search]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blogpage />} />
        <Route path="/tags/:tag" element={<Tagpage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;

import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";


function Home() {
  return (
    <div>
      <Header />
      <Blogs className="blog-height"></Blogs>
      <Pagination />
    </div>
  );
}

export default Home;

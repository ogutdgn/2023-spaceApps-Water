import "./AppRouter.css";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


import Home from "../Pages/Home/Home";
// import Introduction from "../Pages/Introduction/Introduction";
import BlogList from "../Pages/Blog/BlogList/BlogList";
import BlogDetail from "../Pages/Blog/BlogDetail/BlogDetail";
import Test from "../Pages/Test/Test";


const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/introduction" element={<Introduction/>} /> */}
                <Route path="/" element={<Home/>} />
                <Route path="/blog" element={<BlogList/>} />
                <Route path="/blog/:id" element={<BlogDetail/>} />
                <Route path="/test" element={<Test/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;
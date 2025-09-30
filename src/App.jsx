import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./conmponent/Header";
import Footer from "./conmponent/Footer";
import Sidebar from "./conmponent/Sidebar";
import CreatPost from "./conmponent/CreatPost";
import Post from "./conmponent/Post";



import PostListProvider from "./STORE/Post-List-Store";
import PostListt from "./conmponent/PostList";

function App() {
  const [selectedTAb, setselectedTAb] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTAb={selectedTAb}
            setselectedTAb={setselectedTAb}
          ></Sidebar>
          
          <div className="content">
            <Header></Header>
            {selectedTAb === "Home" ? (
              <PostListt></PostListt>
            ) : (
              <CreatPost></CreatPost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
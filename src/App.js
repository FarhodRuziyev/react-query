import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Single from "./pages/single";
import Layout from "./components/leyout";
import Login from "./pages/login";
import Register from "./pages/register";
import './App.scss';
import Create from "./pages/create";


function App() {
  return (
    <div className="App">
      <div className="container">
      <Layout>
        <div>
        <Routes>
          <Route path="/" element={ <About/> }/>
          <Route path="/single/:id" element={ <Single/>}/>
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/>} />
          <Route path="/create" element={ <Create/>} />
          <Route path="/update/:id" element={ <Create/>}/>
          <Route path="*" element={ <h1>404 Not Found</h1>}/>
        </Routes>
        </div>
      </Layout>
      </div>
    </div>
  );
}

export default App;

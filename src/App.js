import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import './App.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

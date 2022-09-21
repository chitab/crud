import "./App.css";
import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import AddPost from "./component/addpost/AddPost";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
export default App;

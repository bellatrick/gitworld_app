import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explorer from "./pages/Explorer";
import Likes from "./pages/Likes";

import Sidebar from "./components/Sidebar";

import { useAuthContext } from "../context/authContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, loading } = useAuthContext();
  
	if (loading) return null;
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <Signup /> : <Navigate to={"/"} />}
          />
          <Route
            path="/explore"
            element={authUser ? <Explorer /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/likes"
            element={authUser ? <Likes /> : <Navigate to={"/login"} />}
          />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;

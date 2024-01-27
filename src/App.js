
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";

import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";

function App() {
  return (
    <>
        <AuthContextProvider>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/account" element={<Account/>}></Route>
                <Route
                    path='/account'
                    element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;

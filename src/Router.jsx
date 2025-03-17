import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
// import Header from "./components/Header/Header.jsx";
import LandingPage from "./pages/movie/LandingPage.jsx";
import "./index.css";
import DataMovies from "./components/DataMovie/GetDataMovie.jsx";
import Home from "./pages/movie/Home.jsx";
import Details from "./pages/movie/Details.jsx";

// layout auth

//layout movie
// function Layout() {
//     return (
//         <Route>
//             <Header />
//             <Outlet />
//         </Route>
//     );
// }
function Router() {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<DataMovies />} />
            {/* <Route path="/header" element={<Header />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail" element={<Details />} />
        </Routes>
    );
}

export default Router;

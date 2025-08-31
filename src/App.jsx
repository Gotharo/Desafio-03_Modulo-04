import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import RegisterPage from "./Components/auth/RegisterPage"
import LoginPage from "./Components/auth/LoginPage"

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            {/* <Home /> */}
            <RegisterPage />
            {/* <LoginPage /> */}
            <Footer />
        </div>
    )
}

export default App


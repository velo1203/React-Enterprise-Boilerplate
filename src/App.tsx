import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/header";
import { DefaultSize } from "./components/layout/defaultSIze/defaultSize";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <DefaultSize>
                <Routes>
                    <Route path="/" element="" />
                </Routes>
            </DefaultSize>
        </BrowserRouter>
    );
}

export default App;

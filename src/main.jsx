import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import StorePage from "./pages/StorePage";
import "./styles.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<StorePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);

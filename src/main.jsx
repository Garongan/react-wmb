import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="text-zinc-900 bg-zinc-50 min-h-screen">
            <div className="container">
                <RouterProvider router={Routes} />
            </div>
        </div>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <div className="text-zinc-900 bg-zinc-50 min-h-screen">
                <div className="container">
                    <RouterProvider router={Routes} />
                </div>
            </div>
        </QueryClientProvider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
        height: 100%;
        a {
            text-decoration: none;
            color: black;
        }
         
        box-sizing: border-box; 
    }
`;
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
    </QueryClientProvider>
);

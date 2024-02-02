import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFound from "./componenets/common/notfound";
import Layout from "./componenets/common/layout";
import Comics from "./screens/comics";
import ComicsDetail from "./screens/comicsDetail";
import Characters from "./screens/characters";
import ListComicCharacters from "./screens/listComicCharacters";
import CharacterDetail from "./screens/characterDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Comics />,
            },
            {
                path: "characters",
                element: <Characters />,
            },
            {
                path: "characters/:characterId",
                element: <CharacterDetail />,
            },
            {
                path: "comics/:comicId",
                element: <ComicsDetail />,
            },
            {
                path: "comics/:comicId/characters",
                element: <ListComicCharacters />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <Helmet>
                <title>Marvel Comics</title>
            </Helmet>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

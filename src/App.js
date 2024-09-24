import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from "./components/Error";
import RestComp from './components/RestComp';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import About from './components/About';
// import Grocery from './components/Grocery';

    //Chunking
    //Code Splitting
    //Dynamic Bundling
    //lazy loading
    //on demand loading
    //Dynamic import

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [userName, setUserName] = useState("username");
    useEffect(() => {
        const apiData_username = {
            name: "Prasun"
        };
        setUserName(apiData_username.name);
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className='root'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/About",
                element: (
                    <Suspense fallback={<>Loading.....please be patient</>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:restId",
                element: <RestComp />
            },
            {
                path: "/Groceries",
                element: (
                    <Suspense fallback={<>Loading.....please be patient</>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/Cart",
                element: <Cart />
            },
       ],
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);
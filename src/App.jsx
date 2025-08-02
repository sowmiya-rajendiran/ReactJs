import { createBrowserRouter, RouterProvider } from "react-router";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import LoginSuccess from "./components/LoginSuccess";

let routes = [
    {
        path : '/',
        element : <RegisterUser />
    },
    {
        path : '/login',
        element : <LoginUser />
    },
    {
        path : '/loginsuccess',
        element : <LoginSuccess />
    },
    {
        path : '/forgetpassword',
        element : <ForgetPassword />
    },
    {
        path : '/resetpassword/:token',
        element : <ResetPassword/>
    }
]
let router = createBrowserRouter(routes , {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    } 
})
function App(){
    return(
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true,
            }}
        />
    )
}

export default App;
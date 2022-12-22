import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import NotFoundPage from "../../pages/others/NotFoundPage/NotFoundPage";
import SuccessMessage from "../../pages/others/SuccessMessage/SuccessMessage";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/courses',
               
                element: <Courses></Courses>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/faq', element: <Faq></Faq>
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://pl-coder-server-wdsumayer.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/success', element: <SuccessMessage></SuccessMessage>
            },
            {
                path: '/checkout/:id',
                loader:({params}) => fetch(`https://pl-coder-server-wdsumayer.vercel.app/checkout/${params.id}`),
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
            },
            
        ]
    },
    {
        path: '*', element: <NotFoundPage></NotFoundPage>
    }
])
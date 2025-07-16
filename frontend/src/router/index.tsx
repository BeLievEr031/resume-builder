import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import HomePage from "../pages/Home";
import ResumeTemplate from "../pages/ResumeTemplates";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "resume-template",
                element: <ResumeTemplate />
            },
        ]
    }
])

export default router;
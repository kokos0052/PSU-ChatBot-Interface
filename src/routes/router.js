import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../components/AdminPage/AdminPage";
import Form from "../components/Form/Form";
import AnswersPage from "../components/AnswersPage/AnswersPage";
import DirectionsPage from "../components/DirectionsPage/DirectionsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminPage />,
    },
    {
        path: "/form",
        element: <Form />,
    },
    {
        path: "/answers",
        element: <AnswersPage />,
    },
    {
        path: "/directions",
        element: <DirectionsPage />,
    }
]);

export default router;

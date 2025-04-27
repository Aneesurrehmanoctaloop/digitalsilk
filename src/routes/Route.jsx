import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../page/home";
import LogoDesign from "../page/LogoDesign";
import SocialMediaMarketing from "../page/SocialMediaMarketing";
import WebsiteDesign from "../page/WebsiteDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/logo-design",
        element: <LogoDesign />,
      },
      {
        path: "/social-media-marketing",
        element: <SocialMediaMarketing />,
      },
      {
        path: "/custom-website-design",
        element: <WebsiteDesign />,
      },
    ],
  },
]);

export default router;

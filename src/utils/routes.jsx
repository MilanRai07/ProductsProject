import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { AuthPage } from "../pages/authentication/AuthPage";
import { SignInPage } from "../pages/authentication/SigninPage";
// import { SingUpPage } from "../pages/authentication/SignupPage";

// Dashboad Pages
import { AdminPanel } from "../dashboard/AdminPanel";
import { AdminHome } from "../dashboard/screens/Home/AdminHome";
import { AdminCategory } from "../dashboard/screens/Category/AdminCategory";
import { AdminBlog } from "../dashboard/screens/Blogs/AdminBlog";
import { AdminReport } from "../dashboard/screens/Reports/AdminReports";
import { AdminUser } from "../dashboard/screens/Users/AdminUsers";
import { AdminProduct } from "../dashboard/screens/Products/AdminProduct";
import { AdminAddProduct } from "../dashboard/screens/Products/pages/AdminAddProduct";
import { AdminGallery } from "../dashboard/screens/Gallery/AdminGallery";
import { AdminLocation } from "../dashboard/screens/Locations/AdminLocation";
import { AdminContact } from "../dashboard/screens/Contacts/AdminContact";
import { AdminDesigner } from "../dashboard/screens/Designer/AdminDesigner";
import { AdminDesignerDetails } from "../dashboard/screens/Designer/AdminDesignerDetails";
import { AdminAddBlog } from "../dashboard/screens/Blogs/AdminAddBlog";
import { AdminAddLocation } from "../dashboard/screens/Locations/AdminAddLocation";
import NotFound from "../pages/NotFound";

// import AuthGuard from "./constants/AuthGuard";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />

      <Route path="auth" element={<AuthPage />}>
        <Route index element={<SignInPage />} />
        {/* <Route path="register" element={<SingUpPage />} /> */}
      </Route>

      {/* Dashboard Routes */}
      {/* <Route path="dashboard" element={<AuthGuard />}> */}
      <Route path="dashboard" element={<AdminPanel />}>
        <Route index element={<AdminHome />} />
        <Route path="categories-tags" element={<AdminCategory />} />
        <Route path="blogs">
          <Route index element={<AdminBlog />} />
          <Route path="add" element={<AdminAddBlog />} />
        </Route>
        <Route path="reports" element={<AdminReport />} />
        <Route path="users" element={<AdminUser />} />
        <Route path="users" element={<AdminUser />} />
        <Route path="products">
          <Route index element={<AdminProduct />} />
          <Route path="add" element={<AdminAddProduct />} />
        </Route>
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="locations">
          <Route index element={<AdminLocation />} />
          <Route path="add" element={<AdminAddLocation />} />
        </Route>
        <Route path="contacts" element={<AdminContact />} />
        <Route path="designers">
          <Route index element={<AdminDesigner />} />
          <Route path=":id" element={<AdminDesignerDetails />} />
        </Route>
      </Route>
      {/* </Route> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

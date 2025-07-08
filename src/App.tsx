import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeIndex from "./pages/home/HomeIndex";
import Layout from "./layout";
import ContactUsIndex from "./pages/contact/contactUs/ContactUsIndex";
import AllAssets from "./pages/assets/allAssets/AllAssets";
import CataloguesIndex from "./pages/catalogues/CataloguesIndex";
import CollectionIndex from "./pages/collections/CollectionIndex";
import AllBrandsIndex from "./pages/brands/allBrands/AllBrandsIndex";
import AboutUsIndex from "./pages/company/aboutUs/AboutUsIndex";
import UseScrollTop from "./customHook/useScrollTop";
import { Suspense, lazy } from "react";
import { NavbarProvider } from "./context/NavBarContext";
import BlogsIndex from "./pages/company/blogs/BlogsIndex";
import GalleryPageIndex from "./pages/gallery/GalleryPageIndex";
import AwardsAndCertificates from "./pages/company/awardsAndCertificates/AwardsAndCertificates";
import PageNotFound from "./components/singlePages/pageNotFound/PageNoFound";
import BrandIndex from "./components/singlePages/brands/BrandIndex";
import CommonContactIndex from "./components/singlePages/contact/CommonContactIndex";
import CommonAssetsContainerIndex from "./components/singlePages/assets/commonAssets/CommonAssetsContainer";


const AssetsSinglePage = lazy(
  () => import("./components/singlePages/assets/AssetsSinglePage")
);
const BlogsSinglePage = lazy(
  () => import("./components/singlePages/Blogs/BlogsSinglePage")
);

function App() {
  return (
    <Router>
      <Suspense>
        <UseScrollTop />
        {/* Public Pages with Layout */}
        <Routes>
          {/* <Route path='/login' element={<LoginForm />} /> */}
          <Route
            path="/*"
            element={
              <NavbarProvider>
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomeIndex />} />
                    {/* contact us pages */}
                    <Route path="/contactus" element={<ContactUsIndex />} />

                    {/* assets pages */}
                    <Route path="/all-assets" element={<AllAssets />} />
                    <Route path='/assets/:slugs' element={<CommonAssetsContainerIndex />} />
                    {/* <Route
                      path="/glass-fitting-assets"
                      element={<GlassFittingIndex />}
                    />
                    <Route
                      path="/smart-locks-assets"
                      element={<SmartLocksIndex />}
                    />
                    <Route path="/safes-assets" element={<SafeIndex />} />
                    <Route
                      path="/shower-assets"
                      element={<ShowerEnclosureIndex />}
                    />
                    <Route
                      path="/kitchen-furniture-assets"
                      element={<KitchenFurnitureIndex />}
                    /> */}

                    <Route path="/catalogues" element={<CataloguesIndex />} />
                    <Route
                      path="/collections"
                      element={<CollectionIndex />}
                    />

                    {/* brand pages */}
                    <Route path="/all-brands" element={<AllBrandsIndex />} />
                    {/* <Route
                        path="/ozone-brands"
                        element={<OzoneIndia />}
                      /> */}
                    {/* <Route path="/neo-brands" element={<NeoIndex />} /> */}
                    {/* <Route
                        path="/godrej-brands"
                        element={<GodrejIndiaBrandIndex />}
                      /> */}
                    {/* <Route
                        path="/ironwood-brands"
                        element={<IronwoodBrandIndex />}
                      /> */}
                    {/* Company pages */}
                    <Route path="/about-us" element={<AboutUsIndex />} />
                    <Route path="/blogs" element={<BlogsIndex />} />
                    <Route
                      path="/awards-certificates"
                      element={<AwardsAndCertificates />}
                    />

                    {/* Gallery Page */}
                    <Route path="/gallery" element={<GalleryPageIndex />} />

                    {/* singlepages */}
                    <Route
                      path="/assets-singlepage/:slugs"
                      element={<AssetsSinglePage />}
                    />
                    <Route
                      path="/blogs-singlepage/:slugs"
                      element={<BlogsSinglePage />}
                    />

                    {/* for brands */}
                    <Route path='/brands/:slugs' element={<BrandIndex />} />

                    {/* for common contact us */}
                    <Route path='/contactus/:slugs' element={<CommonContactIndex />} />


                    <Route path='*' element={<PageNotFound />} />
                  </Routes>
                </Layout>
              </NavbarProvider>
            }
          />
          {/* <Route path="/admin-dashboard" element={<DashBoard />}>
              </Route> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loading from "../components/Loading";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Header />
      <main className="flex flex-grow mt-64 md:mt-88 bg-gradient-to-tr from-slate-200 ">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

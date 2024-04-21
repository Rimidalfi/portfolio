import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex mt-64 md:mt-88 bg-gradient-to-tr from-slate-200 flex-grow">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

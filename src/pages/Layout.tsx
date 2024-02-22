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
    <>
      <Header />
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;

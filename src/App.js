import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/layout";

import { useSelector } from "react-redux";
import Auth from "./pages/Auth/Auth";
import WebFont from "webfontloader";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Diplomata SC", "Nerko One"]
      }
    })
  }, [])

  return (
    <>
      {isLoggedIn && (
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      )}
      {!isLoggedIn && <Auth></Auth>}
    </>
  );
}

export default App;

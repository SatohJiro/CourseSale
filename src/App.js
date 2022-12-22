import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/layout";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./pages/Auth/Auth";
import WebFont from "webfontloader";
import { setUser } from './redux/slices/profileSlice';
import { GET_USER_BY_ID } from "./redux/types/userTypes";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) setLoggedIn(false);
    else dispatch({
      type: GET_USER_BY_ID,
      id: userId,
    });
  })

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

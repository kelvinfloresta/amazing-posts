import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Loading from "components/Loading/Loading";

/* Pages */
const Home = lazy(() => import("../pages/Home"));
const PostDetail = lazy(() => import("../pages/PostDetail"));

export default function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading isLoading />}>
        <Switch>
          <Route path="/:postId" component={PostDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

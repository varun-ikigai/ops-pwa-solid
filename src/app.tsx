import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import LeftMenu from "~/components/LeftMenu";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav/>
          <div class="flex min-h-screen">
            <LeftMenu />
            <div class="flex-1">
              <Suspense>{props.children}</Suspense>
            </div>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <main className="overflow-hidden" >
      <div className="pageWrapper d-lg-flex" style={{ height: "100vh" }}>
        {/********Sidebar**********/}
        <aside
          className="sidebarArea shadow"
          id="sidebarArea"
          style={{ height: "100%", overflow: "auto" }}
        >
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div
          className="contentArea"
          style={{ flex: "1", position: "relative", height: "100%" }}
        >
          <Header
            style={{ position: "relative", top: 0, left: 0, right: 0, height: "10%" }}
          />
          {/********header**********/}
          <Container
            style={{ height: "90%", overflow: "auto" }}
            className="p-4 wrapper"
            fluid
          >
            {/********Middle Content**********/}
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;

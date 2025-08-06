// @ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSideBar = () => {
  let sidebar: SidebarComponent;

  const toggleSideBar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to={"/"}>
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
        </Link>
        <button onClick={toggleSideBar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>
      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)} // allow to use toogle or hide
        created={() => sidebar.hide()} //  When sidebar is created, it starts hidden
        closeOnDocumentClick={true} // Clicking outside the sidebar will close it
        showBackdrop={true} //  Adds a dark background overlay behind the sidebar
        type="over" // Sidebar slides over the page content (not pushing it)
      >
        <NavItems handleClick={toggleSideBar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSideBar;

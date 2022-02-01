import React, { memo, forwardRef } from "react";
import styles from "./Sidebar.module.css";
import ContactArea from "./ContactArea";
import { displayPictureLink } from "../../tools/constants";
import { useRouter } from "next/router";

const SideBar = memo(
  forwardRef((props) => {
    const router = useRouter();
    let showBottomContactArea = true;
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      showBottomContactArea = false;
    }

    let roleAttribute = null;
    if (props.aside) {
      roleAttribute = { role: "complementary" };
    }
    let mainHeading = `Hey! I am Tushar.
  I like to code.`;

    let sidebarClassName = `${styles.SideBar}`;
    if (router.pathname !== "/")
      sidebarClassName += ` ${styles.sideBarCompressed}`;

    return (
      <div className={sidebarClassName} {...roleAttribute}>
        <div className={styles.SideBarBox}>
          <div className={styles.welcomeArea}>
            <div className={styles.displayPhotoArea}>
              <img src={displayPictureLink} alt="Display Picture"></img>
            </div>

            <div className={styles.textArea}>
              <h1>{mainHeading}</h1>
            </div>
          </div>
          {showBottomContactArea && <ContactArea></ContactArea>}
        </div>
      </div>
    );
  })
);
SideBar.type.displayName = "SIDEBAR";
export default SideBar;

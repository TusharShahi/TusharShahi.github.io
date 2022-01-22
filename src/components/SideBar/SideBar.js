import React, { memo, forwardRef } from "react";
import styles from "./Sidebar.module.css";
import ContactArea from "./ContactArea";
import Image from "next/image";
//import { displayPictureLink } from "../../tools/constants";
import profilePic from "../../../public/images/displayPicture-experience-phone.jpg";
import { useRouter } from "next/router";

const SideBar = memo(
  forwardRef((props) => {
    const router = useRouter();
    let showBottomContactArea = true;
    if (typeof window !== "undefined" && window.innerWidth < 786) {
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
              <Image
                loader={({ src }) => src}
                height="232"
                width="240"
                src={profilePic}
                alt="Display Picture"
                placeholder="blur"
                priority
              ></Image>
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

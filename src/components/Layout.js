import { memo } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";

const Layout = memo(({ children }) => {
  const router = useRouter();

  let mainClassName = `${styles.main}`;
  if (router.pathname !== "/") mainClassName += ` ${styles.shiftedMain}`;
  return (
    <div>
      <Header></Header>
      <div className={styles.ContentWrapperBox}>
        <SideBar></SideBar>
        <main className={mainClassName}>{children}</main>
      </div>
    </div>
  );
});
Layout.type.displayName = "LAYOUT";
export default Layout;

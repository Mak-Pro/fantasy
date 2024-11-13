import { Outlet, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import clsx from "clsx";

export const Auth = () => {
  const { pathname } = useLocation();
  const bannerUrl = pathname.split("/")[1];
  console.log(bannerUrl);

  return (
    <div className={clsx(styles.layout)}>
      <div className={clsx(styles.layout, styles.layout__side)}>
        <div className={clsx(styles.layout__media)}>
          {pathname.includes("signup") ? (
            <h2>Sign Up Slider</h2>
          ) : (
            <img src={`./images/auth/${bannerUrl}.webp`} alt="banner" />
          )}
        </div>
      </div>
      <div className={clsx(styles.layout, styles.layout__side)}>
        <Outlet />
      </div>
    </div>
  );
};

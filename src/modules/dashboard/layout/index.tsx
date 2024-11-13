// import { Outlet, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import clsx from "clsx";

export const Dashboard = () => {
  return (
    <div className={clsx(styles.dashboard)}>
      <div className={clsx(styles.dashboard__header)}>Dashboard Header</div>
      <div className={clsx(styles.dashboard__body)}>
        <h2>Dashboard Body</h2>
      </div>
    </div>
  );
};

import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      app
      <AppNav />
    </div>
  );
}

export default AppLayout;

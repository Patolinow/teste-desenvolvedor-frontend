import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import "./styles.scss";

export default function Root() {
  return (
    <>
      <Header />
      <main className="d-flex align-items-center justify-content-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

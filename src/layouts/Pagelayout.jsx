import { useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function PageLayout({ children }) {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      <Navbar />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        {children}
      </div>
    </>
  );
}

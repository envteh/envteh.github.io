import { useLocation, useNavigate } from "react-router-dom";

export function useSmartNavigate() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId: string) => {
    const id = sectionId.replace("#", "");
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return { goToSection, goHome };
}

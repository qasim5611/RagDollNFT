import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

export default () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        height: "30px",
        fontSize: "3rem",
        zIndex: 10,
        cursor: "pointer",
        color: "#FF6704"
      }}
    >
      <FaChevronCircleUp
        onClick={goToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

import { Link } from "react-router-dom";

const AnotherPages = ({ title, link, path }) => {
  return (
    <div style={{ textAlign: "center", height: "100vh" }}>
      <h1>{title}</h1>
      {link ? (
        <Link to={path} style={{ color: "#000000" }}>
          {link}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default AnotherPages;

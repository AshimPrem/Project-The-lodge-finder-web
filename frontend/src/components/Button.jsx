import { Link } from "react-router-dom";
export default function Button({ label ,onClick,to}) {
  return (
    <div>
        <Link to={to}>
        <button onClick={onClick}>{label}</button>
        </Link>
    </div>
  );
}

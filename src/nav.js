import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link to="/labs">Labs</Link>{" | "}
            <Link to="/hello">Hello</Link>{" | "}
            <Link to="/tuiter">Tuiter</Link>
        </div>
    );
}
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

export default function HomeComponent() {
    return (<>
        <h1>Home</h1>
        <WhatsHappening/>
        <TuitsList/>
    </>);
}
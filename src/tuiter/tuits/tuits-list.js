import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

export default function TuitsList() {
    const tuits = useSelector(state => state.tuits)

    return (
        <div>
            {tuits.map((tuit) => {
                return (<div key={tuit._id}>
                    <TuitItem t={tuit}/>
                </div>);
            })}
        </div>
    );
}
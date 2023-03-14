import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";

export default function TuitsList() {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(findTuitsThunk())}, [])

    return (
        <div>
            {loading &&
                <p>Loading...</p>}
            {tuits.map((tuit) => {
                return (<div key={tuit._id}>
                    <TuitItem t={tuit}/>
                </div>);
            })}
        </div>
    );
}
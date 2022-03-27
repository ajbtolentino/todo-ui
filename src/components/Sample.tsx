import { useSelector } from "react-redux"
import { RootState } from "../redux/store/rootState"

export const Sample = () => {
    const greeting = useSelector<RootState, string>(state => state.sample.greeting);

    return (
        <div>
            {greeting}
        </div>
    )
}
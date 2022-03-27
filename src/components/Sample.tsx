import { useSelector } from "react-redux"
import { RootState } from "../redux/store/RootState"

export const Sample = () => {
    const greeting = useSelector<RootState, string>(state => state.sample.greeting);

    return (
        <div>
            {greeting}
        </div>
    )
}
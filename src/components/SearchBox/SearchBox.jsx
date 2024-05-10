import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css"
import { useId } from "react"
import { changeFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
    const value = useSelector((state) => state.filter.name)
    const dispatch = useDispatch()
    const searchId = useId();
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={searchId}>Find contacts by name</label>
            <input value={value} onChange={(event) => dispatch(changeFilter(event.target.value))} className={css.input} type="text" id={searchId}/>
        </div>
    )
}
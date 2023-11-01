import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { modeSliceActions } from "./store/modeSlice";

export default function ModeSwitch() {
    const mode = useSelector((state) => state.mode.mode);
    const dispatch = useDispatch();


    const modeChangeHandler = (event) => {
        if (! event.target.checked){
            dispatch(modeSliceActions.darken())
        }
        else{
            dispatch(modeSliceActions.lighten())
        }
        console.log(event.target.checked)
    }

  return (
    <FormControlLabel
      control={<Switch onChange={modeChangeHandler} defaultChecked />}
      label={mode}
    />
  );
}

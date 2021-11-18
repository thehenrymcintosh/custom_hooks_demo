import { useEventReducer } from "../useEventReducer";
import { State } from "./types";
import { handlers } from "./handlers";

const initialState : State = {
  status: "Idle",
}

const useGeoLocate = () : [State, VoidFunction] => {
  const [state, emit] = useEventReducer(handlers, initialState);
  return [state, emit.Start];
}

export default useGeoLocate;
export type {
  State,
}
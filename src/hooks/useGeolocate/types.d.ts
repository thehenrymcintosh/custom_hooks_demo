import { Handlers as ERHandlers } from "../useEventReducer";

export interface Events {
  Start: undefined,
  Complete: GeolocationPosition,
  Fail: GeolocationPositionError,
}

type Status =
  "Idle" |
  "Pending" |
  "Failed" |
  "Completed" |
  "Unsupported";


type StatusOnly = {
  status: "Idle" | "Pending" | "Unsupported",
  location?: undefined,
  error?: undefined,
}

type CompletedState = {
  status: "Completed",
  location: GeolocationPosition,
  error?: undefined,
}

type FailedState = {
  status: "Failed",
  error: GeolocationPositionError,
  location?: undefined,
}


export type State = StatusOnly | CompletedState | FailedState;
export type Handlers = ERHandlers<State, Events>;
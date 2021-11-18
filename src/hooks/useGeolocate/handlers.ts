import { Handlers } from "./types";

export const Start : Handlers["Start"] = (state, _, emit) => {
  if(!window.navigator || !window.navigator.geolocation) {
    return {status: "Unsupported"}; 
  } 
  if (state.status === "Pending") return state;
  const onSuccess = (location: GeolocationPosition) => emit.Complete(location);
  const onError = (error: GeolocationPositionError) => emit.Fail(error);
  window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
  return {status: "Pending"};
}

export const Fail : Handlers["Fail"] = (state, error) => {
  if (state.status !== "Pending") return state;
  console.warn(`Geolocation failure reason: ${error.message}`);
  return {
    status: "Failed",
    error,
  };
}

export const Complete :  Handlers["Complete"] = (state, location) => {
  if (state.status !== "Pending") return state;
  return {
    status: "Completed",
    location,
  };
}

export const handlers : Handlers = {
  Start,
  Fail,
  Complete,
}
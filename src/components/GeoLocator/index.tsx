import useGeoLocate, { State } from '../../hooks/useGeolocate'
import Failed from './failed';
import Completed from './completed';
import Pending from "./pending";
import Unsupported from "./unsupported";
import Idle from "./idle";
import { GeoLocComponent, GeoLocComponentMap } from './types';

const ComponentMap : GeoLocComponentMap = {
  Completed,
  Failed,
  Pending,
  Unsupported,
  Idle,
}

export default function GeoLocator() {
  const [state, locate] = useGeoLocate();
  const component = ComponentMap[state.status] as GeoLocComponent<State["status"]>;
  return component({state, locate});
}

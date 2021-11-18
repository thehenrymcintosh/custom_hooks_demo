import useGeoLocate, { State } from '../../hooks/useGeolocate'
import Failed from './failed';
import Completed from './completed';
import Pending from "./pending";
import Unsupported from "./unsupported";
import Idle from "./idle";
import { GeoLocComponent } from './types';

const ComponentMap : Record<State["status"], GeoLocComponent> = {
  Completed,
  Failed,
  Pending,
  Unsupported,
  Idle,
}

export default function GeoLocator() {
  const [state, locate] = useGeoLocate();
  return ComponentMap[state.status]({state, locate});
}

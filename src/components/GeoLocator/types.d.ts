import { State } from '../../hooks/useGeolocate'

type WithStatus<S extends State["status"]> = {
  status: S
}

type StateWithStatus<S extends State["status"]> = State & WithStatus<S>


export interface GeoLocComponentProps<S extends State["status"]> {
  state: StateWithStatus<S>, 
  locate: VoidFunction,
}

export type GeoLocComponent<S extends State["status"]> = React.FC<GeoLocComponentProps<S>>;

export type GeoLocComponentMap = {
  [K in State["status"]]: GeoLocComponent<K>;
}
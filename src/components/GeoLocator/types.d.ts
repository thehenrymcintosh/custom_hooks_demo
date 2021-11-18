import { State } from '../../hooks/useGeolocate'

export interface GeoLocComponentProps {
  state: State, 
  locate: VoidFunction,
}

export type GeoLocComponent = React.FC<GeoLocComponentProps>;

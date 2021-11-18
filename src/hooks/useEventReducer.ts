import { useReducer, useCallback, useMemo } from "react";

export type Handlers<State, Events> = {
  [Key in keyof Events]: (state: State, payload: Events[Key], emitters: Emitters<Events>) => State
}

type Action<Events, K extends keyof Events> = {eventType: K, payload: Events[K], emitterProxy: Emitters<Events>}

interface Reducer<State, Events> {
  <K extends keyof Events>(state: State, action: Action<Events, K>): State
}

type Emitter<Payload> = Payload extends undefined ? (payload?: Payload) => void: (payload: Payload) => void

export type Emitters<Events> = {
  [K in keyof Events]: Emitter<Events[K]>
}

export function useEventReducer<State, Events>(handlers: Handlers<State, Events>, initial: State): [State, Emitters<Events>] {
  type Event = keyof Events;
  type Payload = Events[Event];
  const reducer: Reducer<State, Events> = useCallback((state, {eventType, payload, emitterProxy}) => {
    return handlers[eventType](state, payload, emitterProxy); 
  }, [handlers]);

  const [state, dispatch] = useReducer(reducer, initial);

  const emitterProxy = useMemo(() => 
    Object
      .keys(handlers)
      .reduce((emitters, _eventType) => {
        const eventType = _eventType as Event;
        emitters[eventType] = ((payload: Payload) => dispatch({eventType, payload, emitterProxy}) ) as Emitter<Payload>;
        return emitters;
      }, {} as Emitters<Events>)
  , [handlers]);

  return [state, emitterProxy]
}
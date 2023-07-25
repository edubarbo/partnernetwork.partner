import React, { useReducer } from 'react';
import { State } from './index.types';
interface ServiceContext {
    state: State;
    dispatch: ReturnType<typeof useReducer>[1];
}
export declare const store: React.Context<ServiceContext>;
export declare const StateProvider: React.FC;
export {};

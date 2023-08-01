import { State } from '../store/index.types';
export declare const UPDATE_PARTNER_DATA = "UPDATE_PARTNER_DATA";
export declare const UPDATE_PARTNER_DATA_FIELD = "UPDATE_PARTNER_DATA_FIELD";
export declare const ADD_SERVICE = "ADD_SERVICE";
export declare const ADD_SERVICES = "ADD_SERVICES";
export declare const UPDATE_SERVICE = "UPDATE_SERVICE";
export declare const REMOVE_SERVICE = "REMOVE_SERVICE";
export declare const ADD_CLIENT = "ADD_CLIENT";
export declare const ADD_CLIENTS = "ADD_CLIENTS";
export declare const UPDATE_CLIENT = "UPDATE_CLIENT";
export declare const REMOVE_CLIENT = "REMOVE_CLIENT";
export declare type PartnerDataFields = keyof State['partnerData'];
export interface IUpdatePartnerDataFieldPayload {
    field: PartnerDataFields;
    value: string | string[];
}
interface IUpdatePartnerData {
    type: typeof UPDATE_PARTNER_DATA;
    payload: State['partnerData'];
}
interface IUpdatePartnerDataField {
    type: typeof UPDATE_PARTNER_DATA_FIELD;
    payload: IUpdatePartnerDataFieldPayload;
}
interface IAddService {
    type: typeof ADD_SERVICE;
    payload: IServiceItem;
}
interface IAddServices {
    type: typeof ADD_SERVICES;
    payload: IServiceItem[];
}
interface IUpdateService {
    type: typeof UPDATE_SERVICE;
    payload: IServiceItem;
}
interface IRemoveService {
    type: typeof REMOVE_SERVICE;
    payload: {
        id: IServiceItem['id'];
    };
}
interface IAddClient {
    type: typeof ADD_CLIENT;
    payload: IClientItem;
}
interface IAddClients {
    type: typeof ADD_CLIENTS;
    payload: IClientItem[];
}
interface IUpdateClient {
    type: typeof UPDATE_CLIENT;
    payload: IClientItem;
}
interface IRemoveClient {
    type: typeof REMOVE_CLIENT;
    payload: {
        id: IClientItem['id'];
    };
}
export declare type ActionTypes = IUpdatePartnerData | IUpdatePartnerDataField | IAddService | IAddServices | IUpdateService | IRemoveService | IAddClient | IAddClients | IUpdateClient | IRemoveClient;
export {};

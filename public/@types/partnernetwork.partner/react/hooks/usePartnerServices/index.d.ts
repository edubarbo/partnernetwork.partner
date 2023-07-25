declare const usePartnerServices: () => {
    services: IServiceItem[];
    addService: (newService: IServiceItem) => void;
    addServices: (newServices: IServiceItem[]) => void;
    updateService: (newService: IServiceItem) => void;
    removeService: (id: IServiceItem['id']) => void;
};
export default usePartnerServices;

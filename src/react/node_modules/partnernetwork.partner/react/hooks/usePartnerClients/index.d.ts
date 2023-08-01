declare const usePartnerClients: () => {
    clients: IClientItem[];
    addClient: (newClient: IClientItem) => void;
    addClients: (newClients: IClientItem[]) => void;
    updateClient: (newClient: IClientItem) => void;
    removeClient: (id: IClientItem['id']) => void;
};
export default usePartnerClients;

import { IUpdatePartnerDataFieldPayload } from '../../state/reducer/index.types';
declare const usePartnerData: () => {
    partnerData: IPartnerData;
    updateField: ({ field, value }: IUpdatePartnerDataFieldPayload) => void;
    updateData: (newData: IPartnerData) => void;
};
export default usePartnerData;

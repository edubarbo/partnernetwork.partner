import React from 'react';
export interface IUploadImageProps {
    id: string;
    error?: boolean;
    imgURL?: string;
    onImageChange?: (imgURL: string, file?: File) => void;
}
declare const UploadImage: React.FC<IUploadImageProps>;
export default UploadImage;

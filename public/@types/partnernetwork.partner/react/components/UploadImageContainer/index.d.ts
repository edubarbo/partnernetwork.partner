import React from 'react';
import { IUploadImageProps } from '../UploadImage';
interface UploadImageContainerProps extends IUploadImageProps {
    errorMessage?: string | React.ReactElement;
    title: string | React.ReactElement;
    description?: string | React.ReactElement;
}
declare const UploadImageContainer: React.FC<UploadImageContainerProps>;
export default UploadImageContainer;

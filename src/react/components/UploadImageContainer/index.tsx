// Dependencies
import React from 'react'

// Components
import UploadImage, { IUploadImageProps } from '../UploadImage'

interface UploadImageContainerProps extends IUploadImageProps {
  errorMessage?: string | React.ReactElement
  title: string | React.ReactElement
  description?: string | React.ReactElement
}

const UploadImageContainer: React.FC<UploadImageContainerProps> = ({
  id,
  title,
  error,
  imgURL,
  errorMessage,
  description,
  onImageChange,
}) => (
  <div className="upload-image-container">
    <div className="flex">
      <div className="mr5 mr7-l">
        <UploadImage
          onImageChange={onImageChange}
          error={error}
          id={id}
          imgURL={imgURL}
        />
      </div>

      <div className="flex flex-column justify-center w-100">
        <h2 className="ma0 mb3 upload-image-container-title">{title}</h2>

        {description && (
          <p className="ma0 upload-image-container-description">
            {description}
          </p>
        )}
      </div>
    </div>

    {errorMessage && (
      <div className="vtex-input__error c-danger t-small mt3 lh-title">
        {errorMessage}
      </div>
    )}
  </div>
)

export default UploadImageContainer

// Dependencies
import React, { useState, useEffect, ChangeEvent } from 'react'

export interface IUploadImageProps {
  id: string
  error?: boolean
  imgURL?: string
  onImageChange?: (imgURL: string, file?: File) => void
}

const UploadImage: React.FC<IUploadImageProps> = ({
  id,
  error,
  imgURL,
  onImageChange,
}) => {
  const [url, setURL] = useState('')

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList

    if (files?.length === 0) {
      setURL('')

      return
    }

    // eslint-disable-next-line prefer-destructuring
    const file = files[0]

    const reader = new FileReader()

    reader.onload = () => {
      const newURL = reader.result as string

      setURL(newURL)

      if (onImageChange) {
        onImageChange(newURL, file)
      }
    }

    reader.readAsDataURL(file)
  }

  useEffect(() => {
    if (imgURL && imgURL !== url) {
      setURL(imgURL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgURL])

  const classNames = ['upload-image']

  if (error) {
    classNames.push('upload-image--error')
  }

  return (
    <div className={classNames.join(' ')}>
      <label htmlFor={id} className="upload-image-input-label">
        {url && <img src={url} alt="preview" />}
      </label>

      <input
        id={id}
        type="file"
        accept=".jpg,jpeg,.png"
        onChange={handleOnChange}
        className="upload-image-input"
      />
    </div>
  )
}

export default UploadImage

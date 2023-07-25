// Dependencies
import React, { ChangeEvent, MouseEvent } from 'react'
import { Checkbox } from 'vtex.styleguide'

interface TableRowProps extends Omit<IClientItem, 'imgURL' | 'id'> {
  imgURL?: string
  showEmptyImage?: boolean
  onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void
  onButtonRemoveClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const TableRow: React.FC<TableRowProps> = ({
  name,
  imgURL,
  isActive,
  description,
  onCheckboxChange,
  onButtonRemoveClick,
  showEmptyImage = true,
}) => {
  return (
    <div className="table-row">
      <div className="mr5 mr7-l">
        <Checkbox
          id={name}
          name={name}
          checked={isActive}
          onChange={onCheckboxChange}
        />
      </div>

      <div className="flex w-100 items-center">
        {!imgURL && showEmptyImage && (
          <span className="table-row__empty-image mr5" />
        )}

        {imgURL && (
          <div className="table-row__image-container mr5">
            <img src={imgURL} alt={name} className="table-row__image" />
          </div>
        )}

        <div className="table-row__group">
          <h3 className="table-row__name">{name}</h3>

          <p className="table-row__short-description">{description}</p>
        </div>
      </div>

      <div className="ml5 ml7-l">
        <button
          className="table-row__button-remove"
          onClick={onButtonRemoveClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7H19"
              stroke="#142032"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 7V18C18 19.105 17.105 20 16 20H8C6.895 20 6 19.105 6 18V7"
              stroke="#142032"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 3.75H9"
              stroke="#142032"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11V16"
              stroke="#142032"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11V16"
              stroke="#142032"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TableRow

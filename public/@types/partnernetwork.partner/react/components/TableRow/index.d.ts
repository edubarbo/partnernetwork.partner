import React, { ChangeEvent, MouseEvent } from 'react';
interface TableRowProps extends Omit<IClientItem, 'imgURL' | 'id'> {
    imgURL?: string;
    showEmptyImage?: boolean;
    onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onButtonRemoveClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
declare const TableRow: React.FC<TableRowProps>;
export default TableRow;

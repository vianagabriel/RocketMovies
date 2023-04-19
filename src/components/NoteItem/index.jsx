import { InputContainer } from './styles';

import { FiPlus, FiX } from 'react-icons/fi';


export const NoteItem = ({ isNew, value, onClick, ...rest }) => {
    return (


            <InputContainer isNew={isNew}>

                <input
                    type="text"
                    value={value}
                    readOnly={!isNew}
                    {...rest}
                />

                <button
                    type="button"
                    onClick={onClick}
                    className={isNew ? 'button-add' : 'button-delete'}
                >
                    {isNew ? <FiPlus /> : <FiX />}
                </button>

            </InputContainer>


    )
};
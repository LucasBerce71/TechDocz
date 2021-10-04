import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.p`
    font-size: 23px;
    margin-right: 30px;
`;

export const InputContent = styled.input`
    border-radius: 8px;
    border: 0;
    outline: 0;
    padding: 5px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.light};
    font-size: 25px;
`;

export const ButtonSubmit = styled.button`
    height: 35px;
    margin-left: 10px;
    border: 0;
    outline: 0;
    padding: 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme }) => theme.colors.darkBlue};
    font-weight: bold;
    cursor: pointer;
`;
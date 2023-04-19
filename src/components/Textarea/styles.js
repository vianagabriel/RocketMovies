import styled from 'styled-components';

export const Container = styled.textarea`
 width: 100%;
 height: 200px;
 background: ${({ theme }) => theme.Colors.BACKGROUND_800};
 color: ${({ theme }) => theme.Colors.WHITE_TEXT};
 border: none;
 resize: none;
 margin-bottom: .8rem;
 border-radius: 1rem;
 padding: 1.6rem;
 
 &::placeholder{
    color: ${({ theme }) => theme.Colors.GRAY_200}
 }


`;
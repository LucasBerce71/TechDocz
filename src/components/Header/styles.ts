import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.dark};
`

export const HeaderWrapper = styled.div`
  display: flex;
`

export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 30px;

  font-weight: bold;
`

export const HeaderIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
`

export const HeaderIconLabel = styled.p`
  margin-top: 10px;
  font-weight: bold;
`

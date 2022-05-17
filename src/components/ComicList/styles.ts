import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 176px 40px 50px;
  gap: 1rem;
  flex-wrap: wrap;
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 40px;
`

export const PaginationButton = styled.a`
  background: var(--text);
  width: 250px;
  height: 50px;
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

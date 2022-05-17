import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  position: fixed;

  opacity: 0.9;
  background: var(--primary);
  z-index: 10;
`

export const Image = styled.img`
  position: fixed;
  z-index: 20;
  top: 1.5rem;
  left: calc((100vw - 130px) / 2);
`

export const Search = styled.input`
  width: 400px;
  padding: 10px;
  outline: none;
  position: fixed;
  top: 6rem;
  left: calc((100vw - 400px) / 2);
  z-index: 20;

  color: var(--text-secondary);
  font-size: 1rem;
  font-style: italic;
  border-radius: 6px;

  border: none;
  box-shadow: 2px 2px 2px var(--shadow);
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 300px;
  position: relative;

  &:hover {
    border: 10px solid var(--primary);
  }
`

export const Thumb = styled.img`
  width: 100%;
  max-height: 100%;

  object-fit: cover;
`

export const Title = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;

  background: var(--text);
  color: var(--background);
  font-weight: bold;
  text-transform: uppercase;
`

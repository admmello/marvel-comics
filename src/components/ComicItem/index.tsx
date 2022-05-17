import { useState } from 'react'
import { Comic } from '../../hooks/useComics'
import { Container, Thumb, Title } from './styles'

interface ComicProps {
  comic: Comic
}

export function ComicItem({ comic }: ComicProps) {
  const [showTitle, setShowTitle] = useState(false)

  function handleShowTitle() {
    setShowTitle(true)
  }

  function handleHideTitle() {
    setShowTitle(false)
  }

  return (
    <Container onMouseOver={handleShowTitle} onMouseOut={handleHideTitle}>
      <Thumb
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      {showTitle && <Title>{comic.title}</Title>}
    </Container>
  )
}

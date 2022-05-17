import { useComics } from '../../hooks/useComics'

import { ComicItem } from '../ComicItem'

import { Container, PaginationWrapper, PaginationButton } from './styles'

export function ComicList() {
  const { comics, previousPage, nextPage } = useComics()

  return (
    <Container>
      {comics.map((comic) => {
        return <ComicItem key={comic.id} comic={comic} />
      })}
      <PaginationWrapper>
        <PaginationButton onClick={previousPage}>
          PREVIOUS PAGE
        </PaginationButton>
        <PaginationButton onClick={nextPage}>NEXT PAGE</PaginationButton>
      </PaginationWrapper>
    </Container>
  )
}

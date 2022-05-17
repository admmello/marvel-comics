import { useState } from 'react'
import debounce from 'lodash.debounce'

import { Container, Image, Search } from './styles'
import { useComics } from '../../hooks/useComics'

export function Header() {
  const debounceOnChange = debounce(
    ({ target }) => searchComics(target.value),
    500
  )
  const { searchComics } = useComics()

  return (
    <>
      <Image src='marvel_logo.png' alt='logo descritivo da marvel' />
      <Search type='text' onChange={debounceOnChange} />
      <Container />
    </>
  )
}

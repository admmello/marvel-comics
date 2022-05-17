import md5 from 'md5'
import { ComicsProvider } from './hooks/useComics'
import { ComicList } from './components/ComicList'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ComicsProvider>
      <Header />
      <ComicList />
      <GlobalStyle />
    </ComicsProvider>
  )
}

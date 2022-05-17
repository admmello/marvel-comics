import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import md5 from 'md5'
import { api } from '../services/api'
import debounce from 'lodash.debounce'
import { DebouncedFunc } from 'lodash'

export interface Comic {
  id: number
  title: string
  thumbnail: {
    path: string
    extension: string
  }
  images: [
    {
      path: string
      extension: string
    }
  ]
}

interface ComicsProviderProps {
  children: ReactNode
}

interface ComicsContextProps {
  comics: Comic[]
  search: string
  searchComics: (value: string) => void
  previousPage: () => void
  nextPage: () => void
}

const ComicsContext = createContext<ComicsContextProps>(
  {} as ComicsContextProps
)

export function ComicsProvider({ children }: ComicsProviderProps) {
  const [comics, setComics] = useState<Comic[]>([])
  const limit = 20
  const [offset, setOffset] = useState(0)
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(0)

  const timestamp = String(new Date().getTime())
  const publicKey = '16bccb8f50a20a9054cb046356b25c24'
  const privateKey = 'd15e22f9a82facd0f53749b2933e419085eff3f3'
  const hash = md5(`${timestamp}${privateKey}${publicKey}`)

  useEffect(() => {
    if (search === '') {
      api
        .get(
          `comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=-onsaleDate&limit=${limit}&offset=${offset}&format=Comic`
        )
        .then((response) => {
          setComics(response.data.data.results)
          setTotal(response.data.data.total)
        })
        .catch((error) => {
          console.log(error)
          alert('Não foi possível conectar ao servidor.')
        })
    } else {
      api
        .get(
          `comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=-onsaleDate&limit=${limit}&offset=${offset}&format=Comic&titleStartsWith=${search}`
        )
        .then((response) => {
          setComics(response.data.data.results)
          setTotal(response.data.data.total)
        })
        .catch((error) => {
          console.log(error)
          alert('Não foi possível conectar ao servidor.')
        })
    }
  }, [search, offset])

  useEffect(() => {
    setOffset(0)
  }, [search])

  function searchComics(value: string) {
    setSearch(value)
  }

  function previousPage() {
    if (offset >= 20) {
      setOffset(offset - 20)
    }
  }

  function nextPage() {
    if (offset + limit < total) {
      setOffset(offset + 20)
    }
  }

  return (
    <ComicsContext.Provider
      value={{ comics, search, searchComics, previousPage, nextPage }}
    >
      {children}
    </ComicsContext.Provider>
  )
}

export function useComics() {
  const context = useContext(ComicsContext)

  return context
}

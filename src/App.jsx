import { createContext, useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import Destinations from './components/Destinations'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Footer from './components/Footer'

export const CategoryContext = createContext();
export const TotalContext = createContext();
export const TypeContext = createContext();
export const MaxPriceContext = createContext();
export const MinPriceContext = createContext();
export const EssentialsContext = createContext();
export const GuestsContext = createContext();
export const SearchContext = createContext();
export const DurationContext = createContext();

function App() {
  const [currentCategory, setCurrentCategory] = useState('');
  const [total, setTotal] = useState(false);
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [essentials, setEssentials] = useState([]);
  const [guests, setGuests] = useState([0, 0, 0]);
  const [search, setSearch] = useState('');
  const [duration, setDuration] = useState(0);

  return (
    <DurationContext.Provider value={[duration, setDuration]}>
    <SearchContext.Provider value={[search, setSearch]}>
      <GuestsContext.Provider value={[guests, setGuests]}>
        <EssentialsContext.Provider value={[essentials, setEssentials]}>
          <MinPriceContext.Provider value={[minPrice, setMinPrice]}>
            <MaxPriceContext.Provider value={[maxPrice, setMaxPrice]}>
              <TypeContext.Provider value={[type, setType]}>
                <TotalContext.Provider value={[total, setTotal]}>
                  <CategoryContext.Provider value={[currentCategory, setCurrentCategory]}>
                    <Navbar></Navbar>
                    <Searchbar></Searchbar>
                    <Categories></Categories>
                    <Destinations></Destinations>
                    <Footer></Footer>
                  </CategoryContext.Provider>
                </TotalContext.Provider>
              </TypeContext.Provider>
            </MaxPriceContext.Provider>
          </MinPriceContext.Provider>
        </EssentialsContext.Provider>
      </GuestsContext.Provider>
    </SearchContext.Provider>
    </DurationContext.Provider>
  )
}

export default App

import { useEffect, useRef, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { Filter, Product } from "./components"
import { 
  categories, 
  ratings, 
  price, 
  score 
} from "./constants"
import { Products } from "./types"

function App() {
  const ref = useRef(null)
  const [search, setSearch] = useState("")
  const [data, setData] = useState<Products[]>([])
  const [filterValue, setFilterValue] = useState("")

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`https://dummyjson.com/products?limit=10`)
      const { products } = await r.json()

      setData(products)
    }

    getData()
  }, [])

  const filter = data.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))
  const searchProducts = (title: string) => {
    return title.toLowerCase().includes(search.toLowerCase())
  }

  return (
    <main id="main-content">
      <header>
        <nav>
          <img 
            src="/logo.svg" 
            alt="Zipper logo" 
          />

          <div className="text">
            <span>Hi there, </span>
            <span ref={ref} >Welcome to Zipper</span>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <h1>Where leading company find best products</h1>

            <div className="search_div">
              <div className="search_div_input">
                <input 
                  type="text" 
                  value={search}
                  className="search"
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Enter product, categories, service name..."
                />

                <FiSearch className="icon" />
              </div>

              <button className="search_div_btn">Search</button>
            </div>
          </div>
        </section>
      </header>

      <section className="content">
        <div className="content_header">
          <h2>Popular products</h2>

          <div className="filters">
            <Filter 
              title="Category" 
              options={categories} 
            />
            <Filter 
              title="Price" 
              options={price} 
            />
            <Filter 
              title="Ratings" 
              options={ratings} 
            />
            <Filter 
              title="Score" 
              options={score} 
            />
          </div>
        </div>

        <div className="products">
          {filter.length > 0 ? (
            data
            .filter(data => searchProducts(data.title))
            .map(data => (
              <div key={data.id} className="product-wrapper">
                <Product data={data} />
              </div>
            ))
          ) : (
            <h2 className="empty">No products matching <code>{search}</code></h2>
          )}
        </div>
      </section>
    </main>
  )
}

export default App

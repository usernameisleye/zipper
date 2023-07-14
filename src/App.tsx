import { useRef } from "react"
import { FiSearch } from "react-icons/fi"
import { Filter, Product } from "./components"
import { 
  categories, 
  ratings, 
  price, 
  score 
} from "./constants"

function App() {
  const ref = useRef(null)

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
                  className="search"
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
          <div className="product-wrapper">
            <Product />
          </div>

          <div className="product-wrapper">
            <Product />
          </div>

          <div className="product-wrapper">
            <Product />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

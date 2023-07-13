import { useRef } from "react"
import { FiSearch } from "react-icons/fi"
import { Filter } from "./components"

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
              options={[{ key: "Category", value: "tech" }]} 
            />
            <Filter 
              title="Price" 
              options={[{ key: "Price", value: "price" }]} 
            />
            <Filter 
              title="Ratings" 
              options={[{ key: "Ratings", value: "ratings" }]} 
            />
            <Filter 
              title="Score" 
              options={[{ key: "Score", value: "score" }]} 
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

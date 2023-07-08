import { Button, Header } from "./components"

function App() {

  return (
    <main id="main-content">
      <Header />

      <section className="intro">
        <img 
          src="/logo-mastercraft.svg" 
          alt="Mastercraft Logo" 
        />

        <div className="intro_content">
          <h1>Mastercraft Bamboo Monitor Riser</h1>

          <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
        </div>

        <div className="intro_buttons">
          <Button>
            Back this project
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App

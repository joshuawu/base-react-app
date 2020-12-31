import React from "react"
import styled from "styled-components"

const App: React.FC = () => (
  <DivContainer>
    <header className="App--header">Base React App</header>
    <main className="App--main">
      <section className="App--section">
        <header className="App--section-heading">Description</header>
        <div className="App--section-content">
          This is a React app to serve as a starting point for new projects.
        </div>
      </section>
    </main>
  </DivContainer>
)
export default App

const DivContainer = styled.div`
  .App--header {
    align-items: center;
    background-color: #282c34;
    color: white;
    display: flex;
    font-size: 32px;
    justify-content: center;
    min-height: 12vh;
    padding: 24px;
  }

  .App--main {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .App--section {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    padding: 24px;
  }

  .App--section-heading {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .App--section-content {
    font-size: 14px;
  }
`

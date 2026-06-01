import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nazwa from './dzial2/zad3.jsx' 
import DateTime from './dzial3/zad3.jsx'
import CodeSnippet from './dzial3/zad4.jsx'
import ArticleCard from './dzial4/zad3.jsx'
import Header2 from './dzial4/Header.jsx'
import ProductGrid from './dzial4/ProductGrid.jsx'
import Footer from './dzial4/footer.jsx'
import PageLayout from './dzial6/Pagelayout.jsx'
function App() {

  return (
    <>
      <Nazwa /><br/>
      <DateTime/><br/>
      
      <CodeSnippet
  title="Przykład funkcji JS"
  language="JavaScript"
/><br/>
      <ArticleCard/>
      <ArticleCard/>
      <ArticleCard/><br/>
      <Header2/>
      <ProductGrid/>
      <Footer/><br/>
      <PageLayout/>
    </>
  )
}

export default App

import { useState } from 'react'
import kapibara from './assets/kapibara.jpg'
import './App.css'
import Nazwa from './dzial2/zad3.jsx' 
import DateTime from './dzial3/zad3.jsx'
import CodeSnippet from './dzial3/zad4.jsx'
import ArticleCard from './dzial4/zad3.jsx'
import Header2 from './dzial4/Header.jsx'
import ProductGrid from './dzial4/ProductGrid.jsx'
import Footer from './dzial4/footer.jsx'
import PageLayout from './dzial6/Pagelayout.jsx'
import WeatherCard from './dzial7/WeatherCard.jsx'
import UserProfile from './dzial7/UserProfile.jsx'
import ProductImage from './dzial8/ProductImage.jsx'

function App() {
  const users = ["1", "Szymon", "Programiren"];
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
      <WeatherCard city="Kraków" temperature="16" conditions="rainy" warning="⚠️ Ostrzeżenie 1 stopnia, mozliwe podtopienia!"/>
      <UserProfile name="Jakub" email="jakub123@gmail.com" bio="Jakub Kieł" website="www.tiktok.com" isPremium="false" followerCount="2"/>
      <UserProfile name="Tomasz" email="Tomaszproblema@gmail.com" bio="Tomasz Problem" website="www.instagram.com" isPremium="false" followerCount="43"/>
      <UserProfile name="Zuzanna" email="Zuza@gmai.com" bio="Zuzanna Lubna" website="www.facebook.com" isPremium="true" followerCount="65"/>
      <ProductImage image="./src/assets/szpon.jpg"/>
      <ProductImage image="https://dinoanimals.pl/wp-content/uploads/2012/07/Pletwal-blekitny.jpg"/>
      <div className='Imagegallery'><img src={kapibara} width={300}/></div>
    </>
  )
}

export default App

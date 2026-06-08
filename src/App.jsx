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
import InteractiveCard from './dzial10/InteractiveCard.jsx'
import SimpleButton from './dzial10/SimpleButton.jsx'
import App1 from './dzial10/App1.jsx'
import Counter from './dzial11/Counter.jsx'
import LoginForm from './dzial11/LoginForm.jsx'
import CartCounter from './dzial13/CartCounter.jsx'
import ListManager from './dzial13/ListManager.jsx'
import UserCard from './dzial5/UserCard.jsx'
import ContactForm from './dzial14/ContactForm.jsx'
import RegisterForm from './dzial14/RegisterForm.jsx'
import Alert from './dzial19/alert.jsx'
function App() {
  const users = ["1", "Szymon", "Programiren"];
  return (
    <>
      <ContactForm/>
      <RegisterForm/>
      <Alert/>
    </>
  )
}

export default App

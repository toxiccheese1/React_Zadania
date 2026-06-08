import { useState } from 'react'
import kapibara from './assets/kapibara.jpg'
import './App.css'
import Asik from './assets/asik.jpg'
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
import Counter2 from './dzial18/Counter2.jsx'
import Card from './dzial18/Card.jsx'
function App() {
  const users = ["1", "Szymon", "Programiren"];
  return (
    <>
      <UserCard name="Adam" role="Admin" avatarUrl="https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" isOnline="online"/>
      <UserCard name="Agnieszka" role="Użytkownik" avatarUrl="https://img.freepik.com/premium-vector/smiling-woman-avatar_937492-6135.jpg?semt=ais_hybrid&w=740&q=80" isOnline="offline"/>
      <UserCard name="Marian" role="Vip" avatarUrl="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" isOnline="online"/>
      <ProductImage image="https://dinoanimals.pl/wp-content/uploads/2012/07/Pletwal-blekitny.jpg"/>
      <div className='Imagegallery'><img src={kapibara} width={300}/></div>
      <InteractiveCard/>
      <CartCounter/>
      <Counter2/>
      <Card image={Asik}/>
    </>
  )
}

export default App

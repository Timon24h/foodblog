import React from 'react'
import RecipesPreview from "../components/blog/RecipesPreview";
import HeroStarter from "../components/hero/HeroStarter"
import '../scss/styles.scss'

function Home() {
  return (
    <>
      <HeroStarter/>
      <RecipesPreview/>
    </>
  )
}

export default Home
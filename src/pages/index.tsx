import type { NextPage } from 'next'
import Head from 'next/head'
import { MyNavbar } from "../components/Navbar/myNavbar"

import { HomePage } from "../components/Home/HomePage"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="App to practice Login with Next-Auth and Uploading Files to MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyNavbar />
      <HomePage />

      
    </div>
  )
}

export default Home

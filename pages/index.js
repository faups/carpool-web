import Head from 'next/head'

import styles from '../styles/Home.module.css'
import {db,initFirebase,querySnapshot} from '../firebase/initFirebase'
import Image from 'next/image'

initFirebase()
export default function Home() {
  return (

    
    <div className={styles.container}>
      <Head>
        <title>Carpool web</title>
        <meta name="description" content="Generated by Capstone Group 2" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      {/* <main className={styles.main}> */}
      <main className="div">
        <h1 className={styles.nav} >
        TCA Carpool Overhaul
        
        </h1>  
        {/* <Image src ="/carpool.jpg" width= {128} height = {65}/>    */}
        <div className="container">
        <Image src ="/art.jpeg" alt="" width= {100} height = {100}/>
        <h1>Art Wing &rarr;</h1>
        <style jsx>{`
        .container {
          width: 45%;
          background-color: lightgrey;
          font-family: arial;
          margin-left: 0px;
          height: 800px;
          padding: 5px 10px 10px 10px;
          border-radius: 10px;
          display: inline-block;
        }
       
      `}</style>
      <table border="2" width="100%">
    
    <tbody>
      <tr>
        <th scope="row">
          ID
          </th>

      </tr>
    </tbody>
    </table>
        </div>
        <div className="container2">
        <Image src ="/playground.webp" alt="" width= {100} height = {100}/>
        <h1>Playground &rarr;</h1>
        
        <style jsx>{`
        .container2 {
          width: 45%;
          background-color: lightgrey;
          font-family: arial;
          margin-left: 30px;
           height: 800px;
          padding: 5px 10px 10px 10px;
          border-radius: 10px;
          display: inline-block;
        }
       
      `}</style>
      <table border="2" width="100%">
    
    <tbody>
      <tr>
        <th scope="row">ID</th>
        
      </tr>
    </tbody>
    </table>

        </div>
        </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
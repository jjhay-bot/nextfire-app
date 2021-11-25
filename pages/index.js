import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      {/* <Link href={{
        pathname: '/[username]',
        query: { username: 'jhayd18' }
      }}>
        <a>Jhay's profile</a>
      </Link> */}

      <Loader show />               {/*  show is a props */}
    </div>
  )
}

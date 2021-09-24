import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Container } from '../components/Container'
import products from '../data/products.json'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import { useState } from 'react'

import styles from '../styles/Home.module.scss'

const teams = [{ name: 'raw' }, { name: 'smackdown' }]

const Home: NextPage = () => {
  const [activeTeam, setActiveTeam] = useState('')

  let activeProducts = products

  if (activeTeam) {
    activeProducts = activeProducts.filter(
      (product) => product.team === activeTeam
    )
  }

  return (
    <Layout>
      <>
        <Head>
          <title>WWE Super Cards</title>
          <meta name='description' content='Find limited edition cards here.' />
        </Head>

        <Container>
          <>
            <h1 className='sr-only'>WWE battle Cards</h1>

            <div className={styles.teams}>
              <h1>Filter by Teams</h1>
              <ul>
                {teams.map((team) => {
                  const isActive = team.name === activeTeam
                  let teamClassName
                  if (isActive) {
                    teamClassName = styles.teamIsActive
                  }

                  return (
                    <li key={team.name}>
                      <Button
                        className={teamClassName}
                        color='yellow'
                        onClick={() => setActiveTeam(team.name)}>
                        {team.name}
                      </Button>
                    </li>
                  )
                })}
                <li>
                  <Button
                    className={!activeTeam ? styles.teamIsActive : ''}
                    color='yellow'
                    onClick={() => setActiveTeam('')}>
                    View All
                  </Button>
                </li>
              </ul>
            </div>

            <h2 className='sr-only'>All Available Cards</h2>
            <ul className={styles.products}>
              {activeProducts.map((product) => {
                return (
                  <li key={product.id} className={styles.productWrapper}>
                    <a>
                      <div className={styles.productImage}>
                        <Image
                          width={864}
                          height={1200}
                          src={product.image}
                          alt={`Card of ${product.title}`}
                        />
                      </div>
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <h3 className={styles.productPrice}>₹ {product.price}</h3>
                    </a>

                    <p>
                      <Button
                        className='snipcart-add-item'
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url='/'
                        data-item-description=''
                        data-item-image={product.image}
                        data-item-name={product.title}
                        data-item-max-quantity={1}>
                        Add to cart
                      </Button>
                    </p>
                  </li>
                )
              })}
            </ul>
          </>
        </Container>
      </>
    </Layout>
  )
}

export default Home

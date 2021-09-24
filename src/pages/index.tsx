import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import products from '../data/products.json'
import { ChangeEvent, useCallback, useState } from 'react'
import Fuse from 'fuse.js'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import styles from '../styles/Home.module.scss'

const teams = [{ name: 'raw' }, { name: 'smackdown' }]

const Home: NextPage = () => {
  const [activeTeam, setActiveTeam] = useState('')
  const [query, setQuery] = useState('')

  const inputSearchCallbackRef = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus()
    }
  }, [])

  let activeProducts = products

  if (activeTeam) {
    activeProducts = activeProducts.filter(
      (product) => product.team === activeTeam
    )
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setQuery(value)
  }

  const fuse = new Fuse(activeProducts, {
    keys: ['title', 'team'],
  })

  if (query) {
    const results = fuse.search(query)

    //can be used for simple searches
    // activeProducts = activeProducts.filter(({ title }) => {
    //   return title.toLowerCase().includes(query.toLowerCase())
    // })

    activeProducts = results.map((result) => result.item)
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
            <h1 className='sr-only'>WWE Super Cards</h1>

            <div className={styles.discover}>
              <div className={styles.teams}>
                <h1>Filter by Team</h1>
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
              <div className={styles.search}>
                <form>
                  <h1>Search</h1>
                  <input
                    onChange={handleSearch}
                    type='search'
                    ref={inputSearchCallbackRef}
                  />
                </form>
              </div>
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

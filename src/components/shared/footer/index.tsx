import React from 'react'
import Navbar from '../header/navbar'
import Logo from '../logo'
import ContactList from '../contact-list'

const Footer = () => {
  return (
    <footer>
      <section className='bg-background-secondary text-foregroundSecondary'>
        <div className="container pt-8 lg:pt-24">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(400px,_100%),_1fr))] gap-6">
            <div className='flex flex-col gap-6'>
              <Logo />
              <p className='paragraph lg:max-w-lg text-background-accent'>Мы всегда готовы обсудить ваш проект и улучшить ваше присутствие в Интернете.</p>
              <div className='lg:mt-14 lg:max-w-lg'>
                <ContactList />
              </div>
            </div>
            <div className="flex flex-col gap-4 pb-8">
              <h2 className="heading-2">Давайте поговорим!</h2>
              <p className="paragraph lg:max-w-lg text-background-accent">Мы всегда готовы обсудить ваш проект, улучшить ваше присутствие в Интернете и помочь в решении проблем, связанных с UX/UI дизайном.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-background text-foreground'>
        <div className="container">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 py-8">
            <p className='paragraph order-1 lg:-order-1'>Copyright {new Date().getFullYear()}, Digital Agency</p>
            <Navbar />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
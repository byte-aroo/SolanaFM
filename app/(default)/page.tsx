export const metadata = {
  title: 'Bytearoo - SolanaFM',
  description: 'This website is developed & maintained by bytearoo.com',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import DownloadSolanaByHash from '@/components/solana'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DownloadSolanaByHash />
    </>
  )
}

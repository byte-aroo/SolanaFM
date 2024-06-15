'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex">
              <a
                className="font-medium hover:underline text-slate-50"
                href="https://www.fiverr.com/akshatjain5"
                target="_blank"
                rel="noreferrer"
              >
                Find me<span className="sm:inline"> on Fiverr</span>
              </a>{' '}
              <span className="italic px-1.5">or</span>{' '}
              <a className="font-medium hover:underline text-emerald-400" href="https://www.fiverr.com/s/Ayy528q" target="_blank" rel="noreferrer">
                Check Recent Projects
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

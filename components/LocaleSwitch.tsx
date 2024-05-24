/* eslint-disable prettier/prettier */
'use client'
import { useContext } from 'react'
// import { useEffect, useState } from 'react'
import { LanguageContext } from 'utils/locale'
import Image from 'next/image'

const ThemeSwitch = () => {
  const { currentLang, setCurrentLang } = useContext(LanguageContext)

  // When moddunted on client, now we can show the UI
  //   useEffect(() => setMounted(true), [])

  return (
    <>
      <button
        aria-label="Toggle Language"
        className={`flex w-8 items-center justify-center rounded border-2 p-1 ${currentLang === 'zh' ? 'border-gray-700' : 'border-transparent'} transform duration-500`}
        onClick={() => setCurrentLang(currentLang === 'pt' ? 'en' : 'pt')}
      >
        {currentLang === 'pt' &&
          <Image
            style={{ borderRadius: '50%' }}
            src={'/static/images/br.svg'}
            alt="Brazil Flag"
            width={20}
            height={20}
          />}
        {currentLang === 'en' && <Image
          style={{ borderRadius: '50%' }}
          src={'/static/images/us.svg'}
          alt="United States Flag"
          width={20}
          height={20}
        />}
      </button>
    </>
  )
}

export default ThemeSwitch

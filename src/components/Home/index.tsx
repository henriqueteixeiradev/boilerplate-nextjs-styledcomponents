import React from 'react'
import Image from 'next/image'

import * as S from './styled'

export const Home = () => {
  return (
    <S.Section>
      <S.Content>
        <Image
          src="/img/logo_bellmont_sistema.png"
          alt="Logo Bellmont Sistema"
          width={512}
          height={512}
          quality={100}
        />
      </S.Content>
    </S.Section>
  )
}

export default Home

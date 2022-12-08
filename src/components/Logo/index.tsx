/* eslint-disable @next/next/no-img-element */
import MediaMatch from 'components/MediaMatch'
import Image from 'next/image'

export type LogoProps = {
  color?: 'brown' | 'white' | 'dark'
}

const Logo = ({ color = 'white' }: LogoProps) => {
  return (
    <div>
      {color === 'white' ? (
        <>
          <MediaMatch greaterThan="medium">
            <Image
              width={80}
              height={80}
              src="/img/logo-white.svg"
              alt="Logotipo com o cachorro em cima do texto woof bowl stand"
            />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Image
              width={60}
              height={60}
              src="/img/logo-white.svg"
              alt="Logotipo com o cachorro em cima do texto woof bowl stand"
            />
          </MediaMatch>
        </>
      ) : color === 'dark' ? (
        <>
          <MediaMatch greaterThan="medium">
            <Image
              width={80}
              height={80}
              src="/img/logo-dark.svg"
              alt="Logotipo com o cachorro em cima do texto woof bowl stand"
            />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Image
              width={60}
              height={60}
              src="/img/logo-dark.svg"
              alt="Logotipo com o cachorro em cima do texto woof bowl stand"
            />
          </MediaMatch>
        </>
      ) : (
        color === 'brown' && (
          <>
            <MediaMatch greaterThan="medium">
              <Image
                width={80}
                height={80}
                src="/img/logo-brown.svg"
                alt="Logotipo com o cachorro em cima do texto woof bowl stand"
              />
            </MediaMatch>
            <MediaMatch lessThan="medium">
              <Image
                width={60}
                height={60}
                src="/img/logo-brown.svg"
                alt="Logotipo com o cachorro em cima do texto woof bowl stand"
              />
            </MediaMatch>
          </>
        )
      )}
    </div>
  )
}

export default Logo

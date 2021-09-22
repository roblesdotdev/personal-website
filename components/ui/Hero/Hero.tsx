import Image from 'next/image'
import profilePic from '@assets/images/profile.png'
import { Container, SocialLink } from '..'

/**
 * Hero
 **/
const Hero: React.FC<HeroProps> = ({ headline, description, socialLinks }) => {
  return (
    <div className="py-16 border-b-2 border-gray-200">
      <Container className="flex flex-col items-center">
        {/* Image */}
        <div
          className="border-2 border-gray-800 rounded-full mb-6 flex items-center justify-center"
          style={{ padding: '2px' }}
        >
          <Image
            alt="Me"
            src={profilePic}
            className="rounded-full"
            objectFit="cover"
            width="64"
            height="64"
            priority
          />
        </div>
        {/* Description */}
        <h1 className="text-2xl font-sans font-black text-center mb-4">
          {headline}
        </h1>
        <p className="text-center font-serif font-light text-lg leading-relaxed">
          {description}
        </p>
        {/* Social */}
        <div className="flex space-x-6 mt-16">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface HeroProps {
  headline: string
  description: string
  imageUrl: string
  socialLinks: SocialLink[]
}

type SocialLink = {
  label: string
  icon: JSX.Element
  href: string
}
// ***************************************************************************
// Exports
// ***************************************************************************
export default Hero

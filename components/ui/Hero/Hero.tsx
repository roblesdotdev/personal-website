import Image from 'next/image'
import profilePic from '@assets/images/profile.png'
import { ExternalLink } from '@components/icons'
import { Container } from '..'

/**
 * Hero
 **/
const Hero: React.FC<HeroProps> = ({ headline, description, socialLinks }) => {
  return (
    <div className="py-16">
      <Container className="flex flex-col items-center">
        {/* Image */}
        <div
          className="w-16 h-16 border-2 border-gray-800 rounded-full mb-6"
          style={{ padding: '2px' }}
        >
          <Image
            alt="Me"
            src={profilePic}
            className="object-cover rounded-full"
          />
        </div>
        {/* Description */}
        <h1 className="text-2xl font-bold text-center mb-4">{headline}</h1>
        <p className="text-center font-light text-lg">{description}</p>
        {/* Social */}
        <div className="flex space-x-6 mt-16">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="flex items-center cursor-pointer hover:underline"
            >
              <span>{link.icon}</span>
              <span className="text-xs pl-3 pr-2">{link.label}</span>
              <ExternalLink className="h-3 w-3 opacity-75" />
            </a>
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

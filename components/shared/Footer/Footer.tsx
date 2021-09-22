import { Github, Twitter } from '@components/icons'
import { SocialLink } from '@components/ui'

/**
 * Footer
 **/
const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="py-16 bg-gray-200 font-light">
      <div className="mb-12 flex items-center justify-center space-x-4 text-sm">
        <SocialLink
          href="https://tweitter.com"
          label="Twitter"
          icon={<Twitter className="w-4 h-4" />}
        />
        <SocialLink
          href="https://github.com"
          label="Github"
          icon={<Github className="w-4 h-4" />}
        />
      </div>
      <p className="text-center">
        Aldo R. Robles &copy; - {new Date().getFullYear()}
      </p>
    </footer>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface FooterProps {}

// ***************************************************************************
// Exports
// ***************************************************************************
export default Footer

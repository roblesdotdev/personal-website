import { ExternalLink } from '@components/icons'
import ELink from '@components/ui/ELink'

/**
 * SocialLink
 **/
const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => {
  return (
    <>
      <ELink href={href} className="flex items-center">
        <span>{icon}</span>
        <span className="text-xs pl-3 pr-2 font-sans font-light">{label}</span>
        <ExternalLink className="h-3 w-3 opacity-75" />
      </ELink>
    </>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface SocialLinkProps {
  href: string
  label: string
  icon: JSX.Element
}

// ***************************************************************************
// Exports
// ***************************************************************************
export default SocialLink

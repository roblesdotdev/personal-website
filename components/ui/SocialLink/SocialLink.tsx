import { ExternalLink } from '@components/icons'

/**
 * SocialLink
 **/
const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => {
  return (
    <>
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <span>{icon}</span>
        <span className="text-xs pl-3 pr-2 font-sans font-light">{label}</span>
        <ExternalLink className="h-3 w-3 opacity-75" />
      </a>
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

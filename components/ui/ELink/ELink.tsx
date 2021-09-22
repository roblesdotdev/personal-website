import classNames from 'classnames'

/**
 * Link
 **/
const ELink: React.FC<ELinkProps> = ({ href, className, children }) => {
  const cls = classNames(className, 'underline cursor-pinter')
  return (
    <a target="_blank" rel="noreferrer" className={cls} href={href}>
      {children}
    </a>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface ELinkProps {
  href: string
  className?: string
}

// ***************************************************************************
// Exports
// ***************************************************************************
export default ELink

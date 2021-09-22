import classNames from 'classnames'
import Link from 'next/link'

/**
 * AppLink
 **/
const AppLink: React.FC<AppLinkProps> = ({ href, children, className }) => {
  const cls = classNames(className, 'hover:underline')
  return (
    <Link href={href}>
      <a className={cls}>{children}</a>
    </Link>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface AppLinkProps {
  href: string
  className?: string
}

// ***************************************************************************
// Exports
// ***************************************************************************
export default AppLink

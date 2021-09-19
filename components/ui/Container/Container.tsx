import cn from 'classnames'
import type { FC } from 'react'

/**
 * Container
 */
const Container: FC<ContainerProps> = ({ children, className, clean }) => {
  const cls = cn(className, {
    'mx-auto max-w-7xl px-6': !clean,
  })
  return <div className={cls}>{children}</div>
}

// ******************************************************************
interface ContainerProps {
  className?: string
  clean?: boolean
}

// ******************************************************************
// EXPORTS
// ******************************************************************
export default Container

import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

interface MobileLayoutProps extends PropsWithChildren {
  withHeader?: boolean;
  withoutXPadding?: boolean;
}

export const MobileLayout = ({ withHeader, withoutXPadding, children }: MobileLayoutProps) => {
  return (
    <div className={twMerge("pl-2.5 pr-2.5 pb-2.5 pt-0", withHeader ? 'pt-[80px]' : '', withoutXPadding && '!px-0')}>
      <div className="relative max-w-[500px] mx-auto">{children}</div>
    </div >
  )
}

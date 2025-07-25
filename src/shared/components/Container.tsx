import { cn } from '@/lib/classnames/cn'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={cn("container", className)}>
        {children}
    </div>
  )
}

export default Container
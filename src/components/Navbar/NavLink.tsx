import React from 'react'
import { useRouter } from "next/router"
import { Nav } from 'react-bootstrap'
import Link from "next/link"

type Props = {
    href: string,
    title: string
}

export const NavLink: React.FC<Props> = ({ href, title }) => {
    const { asPath } = useRouter()
    
    
  return (
    <Link href={ href }>
        <Nav.Link 
            className={ asPath == href ? `active` : "" } 
            href={ href }
        >
            { title }
        </Nav.Link>
    </Link>
  )
}

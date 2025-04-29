import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#tours", label: "Tours" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
          {/* logo */}
          <div className='items-center flex flex-row justify-start'>
            <div className='h-20 w-20'>
              <img src={logo} className='h-20 w-20 backdrop-blur-sm' />
            </div>
            <h1 className='whitespace-nowrap font-semibold'>Travel Daily</h1>
          </div>

          {/*mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
            {
              isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />
            }
          </button>
          {/* desktop navitems */}
          <div className='hidden md:flex items-center gap-10'>
            {
              navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all
                            ${activeLink === link.href ? "text-purple-600 after:w-full" : "text-gray-600 hover:text-purple-900"}`}>
                  {link.label}</a>
              ))
            }
          </div>

          {/*get in touch btn */}
          <button className='hidden md:block bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
            <a href="#newsletter">Get in touch</a>
          </button>


        </div>
        {/*mobile menu items */}
        {
          isMenuOpen && (
            <div className='md:hidden bg-white border-t border-gray-100 py-4'>
              <div className='container mx-auto px-4 space-y-3'>
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block text-sm font-medium py-2 text-start 
                                ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                    href={link.href}>{link.label}</a>
                ))}
                <button className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                  <a href="$newsletter">Get in touch</a>
                </button>
              </div>
            </div>
          )
        }
      </nav></>

  )
}

export default Navbar
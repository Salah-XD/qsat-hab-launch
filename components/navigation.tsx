"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const blurIntensity = Math.min(scrollY / 100, 1) 
  const backdropBlur = `blur(${4 + blurIntensity * 8}px)` 

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-[#0B1026]/80 transition-all duration-200 ease-out"
      style={{ 
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur 
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">QSAT</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#flight-details" className="hover:text-primary transition-colors">
              Flight Details
            </a>
            <a href="#parksat" className="hover:text-primary transition-colors">
              ParkSat Kit
            </a>
            <a href="#register" className="hover:text-primary transition-colors">
              Register
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <Button variant="outline" size="sm" className="cursor-pointer">
              Recovery Site
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#flight-details" className="hover:text-primary transition-colors">
                Flight Details
              </a>
              <a href="#parksat" className="hover:text-primary transition-colors">
                ParkSat Kit
              </a>
              <a href="#register" className="hover:text-primary transition-colors">
                Register
              </a>
              <a href="#gallery" className="hover:text-primary transition-colors">
                Gallery
              </a>
              <Button variant="outline" size="sm" className="w-fit bg-transparent">
                Recovery Site
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
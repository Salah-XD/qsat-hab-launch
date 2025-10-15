"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, AlertCircle } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const blurIntensity = Math.min(scrollY / 100, 1) 
  const backdropBlur = `blur(${4 + blurIntensity * 8}px)` 

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setIsLoginOpen(false)
      setUsername("")
      setPassword("")
      setError("")
      window.open("https://hab-rescue.vercel.app/", "_blank", "noopener,noreferrer")
    } else {
      setError("Invalid username or password")
    }
  }

  const handleRecoveryClick = () => {
    setIsLoginOpen(true)
    setError("")
  }

  const handleDialogClose = () => {
    setIsLoginOpen(false)
    setUsername("")
    setPassword("")
    setError("")
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <>
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
              <Image src="/QSAT_white_png.png" alt="QSAT Logo" width={150} height={150} />
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
              <Button 
                variant="outline" 
                size="sm" 
                className="cursor-pointer"
                onClick={handleRecoveryClick}
              >
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-fit bg-transparent"
                  onClick={handleRecoveryClick}
                >
                  Recovery Site
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Recovery Site Access</DialogTitle>
            <DialogDescription>
              Please enter your credentials to access the recovery site.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}
            <div className="flex gap-3">
              <Button onClick={handleLogin} className="flex-1">
                Login
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDialogClose}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ChevronDown } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const starsContainerRef = useRef<HTMLDivElement>(null)

  // YouTube video ID extracted from your URL
  const youtubeVideoId = "PfIpHQ1px_E"
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&controls=1`

  // Create stars for hero section only
  useEffect(() => {
    const container = starsContainerRef.current
    if (!container) return
    
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight
    
    // Remove existing stars
    const existingStars = container.querySelectorAll('.star')
    existingStars.forEach(star => star.remove())
    
    // Create stars
    const starCount = 100
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.classList.add('star')
      
      // Random position
      const x = Math.random() * containerWidth
      const y = Math.random() * containerHeight
      
      // Random size (1-3px)
      const size = Math.random() * 2 + 1
      
      // Random delay for twinkling animation
      const delay = Math.random() * 3
      
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${x}px`
      star.style.top = `${y}px`
      star.style.animationDelay = `${delay}s`
      
      container.appendChild(star)
    }
  }, [])

  // Countdown to October 21st, 2025 23:47:00
  useEffect(() => {
    const targetDate = new Date("2025-10-30T11:11:11").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Carousel auto-advance
  useEffect(() => {
    const slides = 2
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const carouselSlides = [
    {
      title: "Satellite Launch Program",
      subtitle: "High Altitude Balloon Mission",
      description: "Join us for an extraordinary journey to the edge of space with our student-built satellite payload",
    },
    {
      title: "Live Mission Control",
      subtitle: "Real-time Data Streaming",
      description: "Experience the thrill of live telemetry and mission updates as we reach new heights",
    },
  ]

  const isLaunchTime = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stars Background - contained to this section only */}
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom, #0B1026, #060813)' }}>
        <div ref={starsContainerRef} className="stars-container absolute inset-0"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto text-center">
          {/* Carousel - Hidden when launch time */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isLaunchTime ? "opacity-0 scale-95 h-0 overflow-hidden" : "opacity-100 scale-100"
            }`}
          >
            <div className="relative h-80 mb-12 flex items-center justify-center">
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h1 className="text-4xl md:text-7xl font-bold mb-6 text-balance leading-tight">{slide.title}</h1>
                  <p className="text-xl md:text-2xl text-primary mb-6 font-semibold">{slide.subtitle}</p>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Countdown Timer */}
          <div
            className={`transition-all duration-1000 ease-in-out ${isLaunchTime ? "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden" : "opacity-100 scale-100"}`}
          >
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 transform transition-transform hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary transition-colors">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transform transition-all hover:scale-105"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Launch Preview
            </Button>
          </div>

          {/* Live Stream Section */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isLaunchTime
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-8 pointer-events-none absolute"
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-primary/30 w-full max-w-7xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary animate-pulse">🚀 LIVE NOW!</h3>
              </div>

              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 bg-secondary rounded-lg border-2 border-primary/20 shadow-inner overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={youtubeEmbedUrl}
                    title="QSAT HAB Launch Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Mission Active</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
                <span className="text-xs sm:text-sm text-muted-foreground">Tracking in Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-8 text-primary z-20 animate-bounce" />
      
      {/* Add required CSS for star animation */}
      <style jsx global>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite ease-in-out;
          opacity: 0.7;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}
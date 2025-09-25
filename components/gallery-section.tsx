import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function GallerySection() {
  const galleryImages = [
    {
      src: "/qsat-cubesat-assembly.jpg",
      alt: "Students assembling CubeSat components",
      title: "CubeSat Assembly Workshop",
    },
    {
      src: "/qsat-balloon-preparation.jpg",
      alt: "HAB payload preparation",
      title: "HAB Payload Preparation",
    },
    {
      src: "/qsat-launch-day.jpg",
      alt: "Launch day team photo",
      title: "Launch Day Team",
    },
    {
      src: "/qsat-data-analysis.jpg",
      alt: "Students analyzing flight data",
      title: "Data Analysis Session",
    },
    {
      src: "/qsat-recovery-mission.jpg",
      alt: "Payload recovery in field",
      title: "Payload Recovery",
    },
    {
      src: "/qsat-student-presentation.jpg",
      alt: "Students presenting results",
      title: "Results Presentation",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Mission Gallery</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Capturing the Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Behind-the-scenes moments and stunning imagery from our space-bound adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, i) => (
            <Card
              key={i}
              className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-sm font-semibold text-foreground">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:bg-primary/10 bg-transparent">
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Satellite, Star, ExternalLink, Zap } from "lucide-react"

export function AboutQSATSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About QSAT</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Explore More QSAT Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our full range of educational kits and learning platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Satellite className="h-6 w-6 text-primary" />
                <span>QSAT E-Commerce</span>
              </CardTitle>
              <CardDescription>Educational satellite kits and components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img
                  src="/qsat-ecommerce-preview.jpg"
                  alt="QSAT E-Commerce Platform"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Browse our complete catalog of DIY satellite kits, sensors, and educational materials designed for
                hands-on learning.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open("https://www.labs.qsat.diy", "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Store
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-primary" />
                <span>QSAT Learning Hub</span>
              </CardTitle>
              <CardDescription>Comprehensive aerospace education platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img
                  src="/qsat-learning-hub-preview.jpg"
                  alt="QSAT Learning Hub Platform"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Access courses, tutorials, and interactive content covering satellite technology, space science, and
                engineering.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open("https://www.qsat.diy", "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <span>QSAT SAAS</span>
              </CardTitle>
              <CardDescription>Advanced satellite management platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img
                  src="/qsat-saas-preview.jpg"
                  alt="QSAT SAAS Platform"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Professional satellite data management and analytics platform for advanced users and organizations.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open("https://www.qsat-saas-new.vercel.app", "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Explore Platform
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

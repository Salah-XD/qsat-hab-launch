import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Satellite } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/high-altitude-balloon-launch-with-students.jpg"
              alt="QSAT HAB Launch"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About the Mission</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Reaching for the Stars with Student Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              The QSAT HAB (High Altitude Balloon) Launch Program represents the pinnacle of student-driven aerospace
              engineering. Our mission will carry cutting-edge scientific instruments and student-built satellites to
              the edge of space, reaching altitudes of over 100,000 feet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>October 15th, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Launch Site Alpha</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>50+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Satellite className="h-5 w-5 text-primary" />
                <span>Multiple Payloads</span>
              </div>
            </div>
            <p className="text-muted-foreground text-pretty">
              This isn't just a launch—it's a celebration of curiosity, innovation, and the boundless potential of young
              minds reaching for the cosmos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

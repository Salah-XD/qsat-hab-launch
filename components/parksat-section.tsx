import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ParkSatSection() {
  return (
    <section id="parksat" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Student Innovation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              ParkSat Kit: Built by Students
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              The ParkSat Kit represents 16 hours of dedicated work by our student innovators. This CubeSat payload includes advanced sensors, communication systems, and data logging capabilities all designed and assembled with the guidance of QSAT’s passionate learners
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Multi-Sensor Array</h4>
                  <p className="text-sm text-muted-foreground">
                    Temperature, pressure, humidity, and radiation sensors
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Real-time Telemetry</h4>
                  <p className="text-sm text-muted-foreground">Live data transmission via radio frequency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Camera System</h4>
                  <p className="text-sm text-muted-foreground">Capturing the stratosphere in breathtaking detail.</p>
                </div>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Learn More About ParkSat</Button>
          </div>
          <div>
            <img
              src="/student-built-satellite-kit-with-electronics-and-s.jpg"
              alt="ParkSat Kit"
              className="rounded-lg shadow-2xl float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function SupportersSection() {
  const partners = [
    // {
    //   logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/institution_1-nMHSSJiFpy2NHZaB8Xv4OcZ7inHcDC.png",
    // },
    // {
    //   logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/institution_2-2JK90V5EYByBVObfJZF1Pg7BMRRnpG.png",
    // },
    {
      logo: "./images/rotary.png",
    },
    {
      logo: "./images/RYLA-Logo-v2.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Partners</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Supported by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            With legal permissions and backing from educational institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, i) => (
            <Card
              key={i}
              className="bg-white p-3 hover:bg-white transition-all duration-300 group"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg bg-white">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  // alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300" alt={""}                />
              </div>
              <div className="text-center mt-4">
                {/* <p className="text-sm font-medium text-foreground">{partner.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{partner.type}</p> */}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-primary">Legal Compliance & Permissions</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              {/* <div>
                <p className="font-medium text-foreground mb-2">Aviation Authority</p>
                <p>All flights conducted under proper aviation regulations and permissions</p>
              </div> */}
              <div>
                <p className="font-medium text-foreground mb-2">Educational License</p>
                <p>Approved educational research project with institutional backing</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Safety Compliance</p>
                <p>Full compliance with safety protocols and emergency procedures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

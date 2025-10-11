import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegistrationSection() {
  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Get Involved</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Join the Mission & Claim Your Rewards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Register for exclusive updates, free courses, and special offers from the QSAT community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Register for Updates</CardTitle>
              <CardDescription>Get exclusive access to mission updates and educational content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Participation Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attending">Attending Event</SelectItem>
                    <SelectItem value="remote">Following Remotely</SelectItem>
                    <SelectItem value="student">Student Participant</SelectItem>
                    <SelectItem value="educator">Educator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Register & Claim Free Course
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Share Your Feedback</CardTitle>
              <CardDescription>Help us improve future missions with your thoughts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Experience</label>
                <Textarea
                  placeholder="Tell us about your experience with QSAT or what excites you about this mission..."
                  rows={4}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Interest Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="How interested are you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very-high">Very High - Want to participate!</SelectItem>
                    <SelectItem value="high">High - Following closely</SelectItem>
                    <SelectItem value="moderate">Moderate - Casual interest</SelectItem>
                    <SelectItem value="learning">Learning - New to this field</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Submit Feedback
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

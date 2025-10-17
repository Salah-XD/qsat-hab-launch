"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RegistrationData {
  fullName: string
  email: string
  participationStatus: string
}

interface FeedbackData {
  experience: string
  interestLevel: string
}

export function RegistrationSection() {
  // Registration Form State
  const [regFullName, setRegFullName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regParticipation, setRegParticipation] = useState("")
  const [regSubmitting, setRegSubmitting] = useState(false)

  // Feedback Form State
  const [feedbackExperience, setFeedbackExperience] = useState("")
  const [feedbackInterest, setFeedbackInterest] = useState("")
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false)

  // Handle Registration Form Submit
  const handleRegistrationSubmit = async () => {
    if (!regFullName || !regEmail || !regParticipation) {
      alert("Please fill in all fields!")
      return
    }

    setRegSubmitting(true)

    const registrationData: RegistrationData = {
      fullName: regFullName,
      email: regEmail,
      participationStatus: regParticipation,
    }

    try {
      const response = await fetch("/api/send-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      })

      if (response.ok) {
        alert("Registration successful! Thank you for joining the QSAT mission. 🚀")
        setRegFullName("")
        setRegEmail("")
        setRegParticipation("")
      } else {
        const error = await response.json()
        alert(`Error: ${error.message || "Failed to submit registration. Please try again."}`)
      }
    } catch (error) {
      console.error("Registration error:", error)
      alert("Failed to submit registration. Please check your connection and try again.")
    } finally {
      setRegSubmitting(false)
    }
  }

  // Handle Feedback Form Submit
  const handleFeedbackSubmit = async () => {
    if (!feedbackExperience || !feedbackInterest) {
      alert("Please fill in all fields!")
      return
    }

    setFeedbackSubmitting(true)

    const feedbackData: FeedbackData = {
      experience: feedbackExperience,
      interestLevel: feedbackInterest,
    }

    try {
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      })

      if (response.ok) {
        alert("Feedback submitted successfully! Thank you for your input. 💬")
        setFeedbackExperience("")
        setFeedbackInterest("")
      } else {
        const error = await response.json()
        alert(`Error: ${error.message || "Failed to submit feedback. Please try again."}`)
      }
    } catch (error) {
      console.error("Feedback error:", error)
      alert("Failed to submit feedback. Please check your connection and try again.")
    } finally {
      setFeedbackSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Get Involved</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Join the Mission & Claim Your Rewards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Register for exclusive updates, free courses, and special offers from the QSAT community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Registration Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Register for Updates</CardTitle>
              <CardDescription>Get exclusive access to mission updates and educational content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input
                  placeholder="Enter your full name"
                  value={regFullName}
                  onChange={(e) => setRegFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Participation Status</label>
                <Select value={regParticipation} onValueChange={setRegParticipation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Attending Event">Attending Event</SelectItem>
                    <SelectItem value="Following Remotely">Following Remotely</SelectItem>
                    <SelectItem value="Student Participant">Student Participant</SelectItem>
                    <SelectItem value="Educator">Educator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleRegistrationSubmit}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={regSubmitting}
              >
                {regSubmitting ? "Submitting..." : "Register & Claim Free Course"}
              </Button>
            </CardContent>
          </Card>

          {/* Feedback Form */}
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
                  value={feedbackExperience}
                  onChange={(e) => setFeedbackExperience(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Interest Level</label>
                <Select value={feedbackInterest} onValueChange={setFeedbackInterest}>
                  <SelectTrigger>
                    <SelectValue placeholder="How interested are you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Very High - Want to participate!">
                      Very High - Want to participate!
                    </SelectItem>
                    <SelectItem value="High - Following closely">High - Following closely</SelectItem>
                    <SelectItem value="Moderate - Casual interest">Moderate - Casual interest</SelectItem>
                    <SelectItem value="Learning - New to this field">Learning - New to this field</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleFeedbackSubmit}
                variant="outline"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={feedbackSubmitting}
              >
                {feedbackSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
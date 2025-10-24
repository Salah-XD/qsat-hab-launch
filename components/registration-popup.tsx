"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

interface RegistrationData {
  fullName: string
  email: string
  participationStatus: string
}

interface FeedbackData {
  experience: string
  interestLevel: string
}

export function RegistrationPopup() {
  const [open, setOpen] = useState(false)
  
  // Auto-open popup when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1000) // Opens after 1 second
    
    return () => clearTimeout(timer)
  }, [])
  
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
        setOpen(false)
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
        setOpen(false)
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join the QSAT Mission</DialogTitle>
          <DialogDescription>
            Register for exclusive updates or share your feedback with us
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Registration</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="register" className="space-y-4 mt-4">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Register your participation</CardTitle>
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
                  <label className="text-sm font-medium mb-2 block">Institute Name</label>
                  <Input
                    type="email"
                    placeholder="school/institute name"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Participant Type</label>
                  <Select value={regParticipation} onValueChange={setRegParticipation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Attending Event">School Participant</SelectItem>
                      <SelectItem value="Following Remotely">Following Remotely</SelectItem>
                      <SelectItem value="Student Participant">College Participant</SelectItem>
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
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4 mt-4">
            <Card className="border-primary/20">
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
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={feedbackSubmitting}
                >
                  {feedbackSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Camera, Home, Search, User, Upload, Sparkles } from 'lucide-react'

export function StyleMateComponent() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [userPreferences, setUserPreferences] = useState({
    style: '',
    colors: '',
    occasions: '',
  })

  const questions = [
    {
      question: "What's your preferred style?",
      options: ['Casual', 'Business Casual', 'Formal', 'Trendy'],
      key: 'style'
    },
    {
      question: "What colors do you prefer?",
      options: ['Neutrals', 'Pastels', 'Bold Colors', 'Monochrome'],
      key: 'colors'
    },
    {
      question: "What occasions do you often dress for?",
      options: ['Work', 'Casual Outings', 'Formal Events', 'Date Nights'],
      key: 'occasions'
    }
  ]

  const handlePreferenceChange = (value: string) => {
    setUserPreferences({
      ...userPreferences,
      [questions[currentStep].key]: value
    })
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowQuestionnaire(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">SM</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">StyleMate</h1>
        </div>
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-purple-600/40 mix-blend-multiply" />
          <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Your AI Fashion Stylist for Every Occasion
                </h2>
                <p className="text-xl text-gray-600">
                  Get personalized style recommendations from our AI assistant. Perfect for busy professionals who want to look their best without the stress.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Sparkles className="mr-2 h-4 w-4" /> Get Started
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Vision_XL_Image_of_a_fashionable_woman_designer_who_g_3.jpg-Wlw4Uh46mM27RITBsVzxzB7u71V6at.jpeg"
                  alt="StyleMate Fashion Assistant"
                  width={800}
                  height={500}
                  layout="responsive"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="max-w-md mx-auto space-y-6 p-4">
          <div className="flex justify-center space-x-4">
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
              <Upload className="mr-2 h-4 w-4" /> Upload Photo
            </Button>
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
              <Camera className="mr-2 h-4 w-4" /> Take Selfie
            </Button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Your Style Suggestions</h3>
            <p className="text-gray-600">
              Upload a photo or complete your style profile to see personalized suggestions here!
            </p>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto flex justify-around">
          <Button variant="ghost" className="flex-1 py-4">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="flex-1 py-4">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="flex-1 py-4">
            <Camera className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="flex-1 py-4">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Questionnaire Modal */}
      <Dialog open={showQuestionnaire} onOpenChange={setShowQuestionnaire}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Let's Personalize Your Style</DialogTitle>
            <DialogDescription>
              Answer a few questions to help us understand your style preferences.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h3 className="font-semibold mb-2">{questions[currentStep].question}</h3>
            <RadioGroup onValueChange={handlePreferenceChange}>
              {questions[currentStep].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <DialogFooter>
            <Button onClick={handleNext}>
              {currentStep < questions.length - 1 ? 'Next' : 'Finish'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

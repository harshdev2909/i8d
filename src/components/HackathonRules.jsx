import React, { useState } from 'react'

const HackathonRules = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const rules = [
    "All Team Members Must Be Present Throughout The Event",
    "All Solutions Must Be Original And Developed During The Hackathon Timeframe",
    "Teams Must Adhere To The Code Of Conduct And Demonstrate Respect For All Participants",
    "Once The Hackathon Ends, No Changes To Submissions Will Be Allowed"
  ]

  const eventStages = [
    {
      title: "Round 1: Ideation Stage",
      details: [
        "Registered Teams Must Submit Their Ideas, Including:",
        "Problem Statement",
        "Description Of The Solution",
        "Microsoft Azure Services To Be Used",
        "Architecture Design",
        "Other Relevant Details"
      ]
    },
    {
      title: "Round 2: Development Stage",
      details: [
        "Selected Teams Will Proceed To Development",
        "24-Hour Coding Period",
        "Mentorship Support Available"
      ]
    },
    {
      title: "Round 3: Presentation Stage",
      details: [
        "Final Presentations",
        "Q&A With Judges",
        "Winner Announcement"
      ]
    }
  ]

  return (
    <div className="bg-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hackathon Rules Section */}
          <h2 className="text-3xl font-semibold mb-6">
            Hackathon Rules
          </h2>
          
          <ul className="space-y-4 mb-16">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-purple-600">•</span>
                <span className="text-gray-600">{rule}</span>
              </li>
            ))}
          </ul>

          {/* Event Structure Section */}
          <h2 className="text-3xl font-semibold mb-8">
            Event Structure -Hybrid Format
          </h2>

          <div className="relative">
            {/* Carousel Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-4">
              <h3 className="text-xl text-purple-600 font-semibold mb-4">
                {eventStages[activeSlide].title}
              </h3>
              <ul className="space-y-2">
                {eventStages[activeSlide].details.map((detail, index) => (
                  <li key={index} className="text-gray-600">
                    {index === 0 ? (
                      <span className="font-medium">{detail}</span>
                    ) : (
                      <span className="ml-4">• {detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {eventStages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonRules 
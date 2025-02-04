import React, { useState } from 'react'

const ProblemStatement = ({ number, title, description, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-4 px-6 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium">
          {number}. {title}
        </h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="px-6 pb-4 text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

const ProblemStatements = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const problems = [
    {
      title: "Smart Governance",
      description: "Governments Worldwide Are Adopting Digital Transformation, But Challenges Like Bureaucratic Inefficiencies, Corruption, And Limited Citizen Engagement Persist. AI Can Revolutionize Governance By Improving Transparency, Automating Processes, And Enabling Better Decision-Making."
    },
    {
      title: "Education For All",
      description: "Access To Quality Education Remains A Challenge, Especially In Remote And Underserved Communities. AI Can Bridge Learning Gaps By Personalizing Education, Making Learning More Interactive, And Improving Accessibility For Students With Disabilities."
    },
    {
      title: "Public Health & Safety",
      description: "Public Health And Safety Are Critical For A Well-Functioning Society, But Issues Like Disease Outbreaks, Emergency Response Delays, And Urban Safety Threats Persist. AI Can Enhance Healthcare Monitoring, Disaster Response, And Accident Prevention."
    },
    {
      title: "Environmental Sustainability",
      description: "Climate Change, Pollution, And Waste Management Are Among The Biggest Challenges Facing Our Planet. AI Can Help Reduce Environmental Impact By Improving Waste Management, Monitoring Air And Water Quality, And Predicting Climate Disasters."
    },
    {
      title: "Smart Cities & Urban Mobility (Merged with Transportation & Urban Planning)",
      description: "As urban populations grow, cities face challenges like traffic congestion, inefficient public transport, and unsustainable development. AI can optimize traffic flow, improve public transport efficiency, and help plan sustainable urban spaces."
    },
    {
      title: "Open Innovation – AI for Real-World Impact (New Broad Problem Statement)",
      description: "AI has limitless potential to solve real-world challenges across various domains. This open-ended challenge allows participants to identify a social or environmental issue of their choice and propose an AI-powered solution."
    }
  ]

  return (
    <div className="bg-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-semibold p-6 border-b border-gray-200">
            Problem Statements:
          </h2>
          
          {problems.map((problem, index) => (
            <ProblemStatement
              key={index}
              number={index + 1}
              title={problem.title}
              description={problem.description}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemStatements 
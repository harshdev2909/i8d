import React, { useState } from 'react'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-400">
      <button
        className="w-full py-4 flex items-center justify-between text-white text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium">{question}</h3>
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
        <p className="pb-4 text-white/90">
          {answer}
        </p>
      )}
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "1. Who Can Participate In The Hackathon?",
      answer: "Final-Year Students From B.E/B.Tech, B.Sc, BCA, M.Tech, M.Sc, And MCA Programs."
    },
    {
      question: "2. Is There Any Registration Fee?",
      answer: "No, participation is completely free of charge."
    },
    {
      question: "3. Can Teams Be Mixed From Different Colleges?",
      answer: "No, all team members must be from the same college."
    },
    {
      question: "4. How Many Members Are Required Per Team?",
      answer: "Each team must consist of exactly 4 female participants."
    },
    {
      question: "5. What Are The Technical Requirements For Participation?",
      answer: "Participants must have proficiency in Microsoft Azure and AI Cloud Services."
    },
    {
      question: "6. What Is The Format Of The Hackathon?",
      answer: "The hackathon consists of multiple rounds including ideation, development, and final presentation phases."
    },
    {
      question: "7. What Happens In The Finale Round?",
      answer: "Teams will present their completed solutions to the judges and demonstrate the working prototype."
    },
    {
      question: "8. Are There Any Resources Provided To Participants In Final Round?",
      answer: "Yes, participants will receive access to Azure credits, technical mentorship, and documentation resources."
    },
    {
      question: "9. Can We Use Pre-Built Solutions?",
      answer: "No, all solutions must be developed during the hackathon timeframe."
    },
    {
      question: "10. Who Will Judge The Solutions?",
      answer: "A panel of experts from industry and academia will evaluate the solutions."
    },
    {
      question: "11. Can We Make Changes To Our Submission After The Deadline?",
      answer: "No, changes will not be accepted after the submission deadline."
    },
    {
      question: "12. Will Participation In The Hackathon Guarantee Job Placements?",
      answer: "While participation provides valuable experience, job placements are based on merit and availability."
    },
    {
      question: "13. Where Will The Finale Be Held?",
      answer: "The finale will be held at GSSS Institute of Engineering and Technology for Women, Mysuru."
    },
    {
      question: "14. When Is The Hackathon Finals?",
      answer: "The exact date will be communicated to all selected teams."
    }
  ]

  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-900 py-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12">
            FAQs
          </h2>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Monument */}
      {/* <div className="absolute bottom-0 right-0 w-48 h-48 opacity-50">
        <img 
          src="/monument-illustration.png" 
          alt="Decorative Monument" 
          className="w-full h-full object-contain"
        />
      </div> */}

      {/* Wave Decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="white" className="w-full h-12">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div> */}

      
    </div>
  )
}

export default FAQ 
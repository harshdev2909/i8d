import React from 'react'

const Criteria = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-900 text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Participation Criteria */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Participation Criteria</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Each College Can Nominate Multiple Teams</li>
              <li>Each Team Must Consist Of Four Female Participants</li>
              <li>Teams Must Have Unique Names That Reflect Their Identity And Vision</li>
            </ul>
          </div>

          {/* Eligibility Criteria */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Eligibility Criteria</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Courses: B.E/B.Tech, B.Sc, BCA, M.Tech, M.Sc, MCA</li>
              <li>Final-Year Students (With No Pre-Placement Offers)</li>
              <li>Technical Proficiency: Proficiency In Microsoft Azure And AI Cloud Services Is Mandatory</li>
            </ul>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Judging Criteria</h2>
          <p className="leading-relaxed">
            The Decision Of The Panel Of Judges Will Be Final And Binding. Evaluation Will Be Based On Innovation, Feasibility, Technical Execution, And Presentation.
          </p>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-50">
        <img 
          src="/monument-illustration.png" 
          alt="Decorative Monument" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="white" className="w-full h-12">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Criteria 
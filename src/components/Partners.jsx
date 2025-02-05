import React from 'react'

const PartnerCard = ({ imageSrc, altText }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 flex items-center justify-center">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="max-w-full h-auto"
      />
    </div>
  )
}

const Partners = () => {
  const partners = [
    {
      image: "/gsss-logo.png",
      alt: "GSSS Institute of Engineering and Technology for Women"
    },
    {
      image: "/id8-devhub-logo.png",
      alt: "ID8 DevHub"
    }
  ]

  const reasons = [
    "Gain Hands-On Experience In Cloud Computing And AI",
    "Collaborate With Like-Minded Peers And Industry Experts",
    "Get Exposure To Microsoft Azure Tools And Services",
    "Compete For Cash Prizes, Exclusive Goodies",
    "Enhance Your Technical Portfolio And Stand An Advantage Of Potential Employability"
  ]

  return (
    <div className="bg-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Partners Section */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Partners
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  imageSrc={partner.image}
                  altText={partner.alt}
                />
              ))}
            </div>
          </div>

          {/* Why Participate Section */}
          <div className="bg-gray-100 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-semibold p-6 bg-gray-200 rounded-t-lg">
              Why Participate?
            </h2>
            
            <div className="p-6">
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-purple-600">•</span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="text-center">
            <h3 className="text-2xl text-purple-600 font-medium">
              Register Now And Take The First Step Toward A Transformative Tech Journey!
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners 
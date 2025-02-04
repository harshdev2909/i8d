import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex items-center justify-between">
      <div className="absolute top-4 right-6 flex items-center gap-4">
        <button className="px-6 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors">
          Login
        </button>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Supported by</span>
          <img 
            src="/microsoft-azure-logo.png" 
            alt="Microsoft Azure" 
            className="h-8"
          />
        </div>
      </div>
      <div className="max-w-xl">
        <div className="mb-8">
          <img 
            src="/path-to-ainnovation-logo.png" 
            alt="AI'nnovation 2025 Logo" 
            className="w-72"
          />
        </div>
        <h1 className="text-5xl font-light text-gray-800 leading-tight mb-6">
          Women in tech, gear up<br />
          to elevate your tech skills<br />
          to the next level!
        </h1>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
      
      <div className="hidden lg:block">
        <img 
          src="/path-to-hero-image.jpg" 
          alt="Woman working on laptop" 
          className="w-[600px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero
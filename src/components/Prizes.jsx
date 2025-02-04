import React from 'react'

const PrizeItem = ({ place, amount, color }) => {
  return (
    <div className="text-center p-6">
      <h3 className={`text-2xl ${color} font-semibold mb-2`}>
        {place} Prize
      </h3>
      <p className="text-xl text-gray-700">
        INR {amount.toLocaleString()}
      </p>
    </div>
  )
}

const Prizes = () => {
  const prizes = [
    { place: "1st", amount: 25000, color: "text-purple-600" },
    { place: "2nd", amount: 15000, color: "text-purple-500" },
    { place: "3rd", amount: 10000, color: "text-purple-400" }
  ]

  return (
    <div className="bg-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Prizes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <PrizeItem
                key={index}
                place={prize.place}
                amount={prize.amount}
                color={prize.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes 
'use client'

import { useState } from "react"
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "FREE",
      price: 0,
      features: [
        "Organize across all apps by hand",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
    },
    {
      name: "STANDARD",
      price: 9.99,
      features: [
        "Organize across all apps by hand",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
    },
    {
      name: "PREMIUM",
      price: 19.99,
      features: [
        "Organize across all apps by hand",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 uppercase mb-4">PRICING</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple Pricing</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-8">
            <span>Home</span>
            <span>›</span>
            <span>Pricing</span>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn(
              "text-sm font-medium",
              !isYearly ? "text-gray-900" : "text-gray-500"
            )}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
            >
              <span className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white transition",
                isYearly ? "translate-x-6" : "translate-x-1"
              )} />
            </button>
            <span className={cn(
              "text-sm font-medium",
              isYearly ? "text-gray-900" : "text-gray-500"
            )}>
              Yearly
            </span>
            <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded">
              Save 25%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-lg border p-8",
                index === 1 ? "bg-gray-900 text-white" : "bg-white"
              )}
            >
              <h3 className="text-xl font-bold mb-5">{plan.name}</h3>
              <p className="text-sm mb-6">Organize across all apps by hand</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg">$</span>
                <span className="text-gray-500 dark:text-gray-400">Per Month</span>
              </div>

              <button
                className={cn(
                  "w-full rounded-md py-2 px-4 text-sm font-medium mb-8",
                  index === 1
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                )}
              >
                Try for free
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <p className="text-center text-gray-600 mt-16">
          Trusted By Over 4000 Big Companies
        </p>
      </div>
    </section>
  )
}


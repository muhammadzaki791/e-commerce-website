'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface ProductTabsProps {
  tabs: Tab[]
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="mt-12">
      <div className="border-b">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "border-b-2 pb-4 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "border-black text-black"
                  : "border-transparent text-gray-600 hover:text-black"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-8">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}


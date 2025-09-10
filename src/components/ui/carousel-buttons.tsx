"use client"

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type PropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<PropType> = (props) => {
  const { selected, onClick } = props

  return (
    <button
      className={`h-3 w-3 rounded-full transition-all duration-300 ${
        selected ? 'bg-accent w-6' : 'bg-white/50'
      }`}
      type="button"
      onClick={onClick}
    />
  )
}

export const PrevButton: React.FC<{ onClick: () => void }> = (props) => {
  const { onClick } = props
  return (
    <button
      className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  )
}

export const NextButton: React.FC<{ onClick: () => void }> = (props) => {
  const { onClick } = props
  return (
    <button
      className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  )
}

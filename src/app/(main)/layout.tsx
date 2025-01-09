"use client"
import { useState } from 'react'



export default function layount({children } : {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  setTimeout(() => setIsLoading(false), 2000)

  return (
<>
          {children}
</>
  )
}
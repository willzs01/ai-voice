"use client"

import { AppSidebar } from "@/components/global/app-sidebar"
import { Button } from "@/components/ui/button"
import { DashboardInput, Input } from "@/components/ui/input"
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { 
  SidebarInset, 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar"
import { useState } from 'react'



export default function layount({children } : {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  setTimeout(() => setIsLoading(false), 2000)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
<header className="relative flex h-16 shrink-0 items-center gap-2 border-b px-4">
  <SidebarTrigger className="-ml-1" />
  
        
        </header>

          {children}

      </SidebarInset>
    </SidebarProvider>
  )
}
"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Kanit } from "next/font/google"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

const kanit = Kanit({ weight: "600", subsets: ["latin"] })

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <Sidebar {...props} className={kanit.className}>
      <SidebarHeader className="mt-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <h1 className="text-2xl font-bold mb-8">Voiceprinter AI</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-8">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleButtonClick('create')}
                className={`${
                  activeButton === 'create'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-black hover:shadow-md hover:translate-x-1 hover:scale-105'
                } transition-all duration-200 py-4 text-lg rounded-lg mb-4`}
              >
                Create
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleButtonClick('library')}
                className={`${
                  activeButton === 'library'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-black hover:shadow-md hover:translate-x-1 hover:scale-105'
                } transition-all duration-200 py-4 text-lg rounded-lg`}
              >
                Library
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
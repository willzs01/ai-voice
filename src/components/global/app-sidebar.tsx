"use client"
import * as React from "react"
import { Plus, Minus, FolderPlus, FilePlus } from "lucide-react"

import { SearchForm } from "@/components/global/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import {Kanit} from "next/font/google"

const kanit = Kanit({weight: "600", subsets: ["latin"]})
const kanit400 = Kanit({weight: "400", subsets: ["latin"]})

// Sample data for folders and notes
const data = {
  folders: [
    {
      title: "Mathematics",
      notes: [
        { title: "Algebra Basics", url: "#" },
        { title: "Calculus Introduction", url: "#" },
      ],
    },
    {
      title: "Physics",
      notes: [
        { title: "Newton's Laws", url: "#" },
        { title: "Electromagnetism", url: "#" },
      ],
    },
    {
      title: "Computer Science",
      notes: [
        { title: "Introduction to Algorithms", url: "#" },
        { title: "Data Structures Overview", url: "#" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className={`${kanit.className}`}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
              <h1 className="text-xl font-bold">Autolearn AI</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.folders.map((folder, index) => (
              <Collapsible
                key={folder.title}
                defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {folder.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {folder.notes?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub className={`${kanit400.className}`}>
                        {folder.notes.map((note) => (
                          <SidebarMenuSubItem key={note.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={note.url} >{note.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}

            
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

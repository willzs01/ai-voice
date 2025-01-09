import { AppSidebar } from "@/components/global/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/global/Mode-toggle";
import { FaCircleStop } from "react-icons/fa6";
import { UploadForm } from "@/components/core/UploadForm";
import { createClient } from "./../../../../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="relative flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1 transition-transform duration-300 hover:scale-110" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <button
            type="button"
            className="absolute top-4 right-4 flex items-center gap-2 px-2 py-1.5 bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FaCircleStop className="w-4 h-4" />
            Record
          </button>
          <ModeToggle />
        </header>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] max-h-screen p-4">
          <h1 className="lg:text-4xl text-xl md:text-2xl text-gray-800 dark:text-gray-400 font-bold text-center mb-6 animate-slideDown opacity-50">
            What do you want to learn today?
          </h1>
          <div className="w-full mt-32">
            <UploadForm />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
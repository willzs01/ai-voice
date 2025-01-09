import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const videoId = 'EGW2HS2tqAQ'

export default function ResizableHandleDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-full rounded-lg border "
    >
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center px-6">
          <iframe
      width="660"
      height="400"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>

        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Side</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

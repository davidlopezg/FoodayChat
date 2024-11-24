import { ChatContainer } from "@/components/chat/ChatContainer";
import { ThemeProvider } from "@/components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="chat-theme">
      <div className="min-h-screen w-full bg-background text-foreground">
        <ChatContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
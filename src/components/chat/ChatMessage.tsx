import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div className={cn(
      "flex gap-4 p-6 rounded-xl transition-colors",
      isAssistant ? "bg-secondary/50" : "bg-primary/5"
    )}>
      <div className="flex-shrink-0">
        {isAssistant ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Bot className="h-6 w-6 text-primary" />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <User className="h-6 w-6 text-primary-foreground" />
          </div>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium">
          {isAssistant ? 'Asistente' : 'Tú'}
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {message.content}
        </div>
      </div>
    </div>
  );
}
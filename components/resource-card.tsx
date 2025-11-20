import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResourceCardProps {
  title: string
  description: string
  url: string
  type: "video" | "article" | "template" | "chat"
}

const typeLabels = {
  video: "🎥 Видео",
  article: "📄 Статья",
  template: "📋 Шаблон",
  chat: "💬 Чат",
}

const typeColors = {
  video: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
  article: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  template: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  chat: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
}

export function ResourceCard({ title, description, url, type }: ResourceCardProps) {
  return (
    <Link
      href={url}
      target={url.startsWith("http") ? "_blank" : "_self"}
      rel={url.startsWith("http") ? "noopener noreferrer" : ""}
    >
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 border-border/50 bg-card/30 backdrop-blur">
        <CardHeader>
          <div className="flex items-start justify-between gap-3 mb-2">
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
            <Badge variant="secondary" className={typeColors[type]}>
              {typeLabels[type]}
            </Badge>
          </div>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

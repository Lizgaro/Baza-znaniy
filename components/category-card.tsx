import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoryCardProps {
  id: string
  title: string
  description: string
  icon: string
  color: string
  resourceCount: number
}

export function CategoryCard({ id, title, description, icon, color, resourceCount }: CategoryCardProps) {
  return (
    <Link href={`/${id}`}>
      <Card className="h-full transition-all hover:scale-105 hover:shadow-lg border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-3`}
          >
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{resourceCount} материалов</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getCategoryById, categories } from "@/lib/data"
import { ResourceCard } from "@/components/resource-card"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.id,
  }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categoryId } = await params
  const category = getCategoryById(categoryId)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Назад к категориям
          </Button>
        </Link>

        <header className="mb-12">
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl mb-6`}
          >
            {category.icon}
          </div>
          <h1 className="text-4xl font-bold mb-3">{category.title}</h1>
          <p className="text-xl text-muted-foreground">{category.description}</p>
          <p className="text-sm text-muted-foreground mt-2">{category.resources.length} материалов</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              url={resource.url}
              type={resource.type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

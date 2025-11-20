import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { searchResources } from "@/lib/data"
import { ResourceCard } from "@/components/resource-card"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"

function SearchResults({ query }: { query: string }) {
  const results = searchResources(query)

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground">Ничего не найдено по запросу "{query}"</p>
        <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить запрос</p>
      </div>
    )
  }

  return (
    <>
      <p className="text-muted-foreground mb-8">
        Найдено {results.length} {results.length === 1 ? "материал" : "материалов"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            url={resource.url}
            type={resource.type}
          />
        ))}
      </div>
    </>
  )
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q || ""

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Назад к категориям
          </Button>
        </Link>

        <header className="mb-12 space-y-6">
          <h1 className="text-4xl font-bold">Поиск материалов</h1>
          <SearchBar />
        </header>

        {query && (
          <Suspense fallback={<div className="text-muted-foreground">Поиск...</div>}>
            <SearchResults query={query} />
          </Suspense>
        )}
      </div>
    </div>
  )
}

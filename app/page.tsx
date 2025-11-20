import { categories } from "@/lib/data"
import { CategoryCard } from "@/components/category-card"
import { SearchBar } from "@/components/search-bar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            База знаний
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Все материалы для партнеров роста в одном месте
          </p>
          <div className="flex justify-center pt-4">
            <SearchBar />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              color={category.color}
              resourceCount={category.resources.length}
            />
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Версия 1.0.0 • Обновлено 13 ноября 2025</p>
        </footer>
      </div>
    </div>
  )
}

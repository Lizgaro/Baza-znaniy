export interface Resource {
  id: string
  title: string
  description: string
  url: string
  type: "video" | "article" | "template" | "chat"
  category: string
}

export interface Category {
  id: string
  title: string
  description: string
  icon: string
  color: string
  resources: Resource[]
}

export const categories: Category[] = [
  {
    id: "support",
    title: "Поддержка и обучение",
    description: "Чаты сообщества, капитанов и мастермайнды для роста команд",
    icon: "💬",
    color: "from-blue-500 to-cyan-500",
    resources: [
      {
        id: "support-1",
        title: "Чат сообщества",
        description: "Общий чат для обмена опытом и поддержки",
        url: "#",
        type: "chat",
        category: "support",
      },
      {
        id: "support-2",
        title: "Чат капитанов",
        description: "Закрытый чат для лидеров команд",
        url: "#",
        type: "chat",
        category: "support",
      },
      {
        id: "support-3",
        title: "Мастермайнды и разборы",
        description: "Групповые разборы кейсов и стратегические сессии",
        url: "https://t.me/c/314852664/312",
        type: "video",
        category: "support",
      },
    ],
  },
  {
    id: "production",
    title: "Продюссирование",
    description: "Автоматизация воронок, боты и материалы для продюссеров",
    icon: "🤖",
    color: "from-purple-500 to-pink-500",
    resources: [
      {
        id: "prod-1",
        title: "Продюссер бота с воронкой",
        description: "Пошаговое руководство по настройке автоматических воронок",
        url: "#",
        type: "article",
        category: "production",
      },
      {
        id: "prod-2",
        title: "Навоборот для работы",
        description: "Инструменты и методы для продюссеров",
        url: "https://t.me/c/314852664/324",
        type: "article",
        category: "production",
      },
      {
        id: "prod-3",
        title: "Еще больше материалов",
        description: "Дополнительные ресурсы и кейсы",
        url: "https://t.me/c/314127867/1430",
        type: "article",
        category: "production",
      },
    ],
  },
  {
    id: "insights",
    title: "Насмотренность и кейсы",
    description: "Коллекция скриптов, интервью, запланов и примеров",
    icon: "👁️",
    color: "from-orange-500 to-red-500",
    resources: [
      {
        id: "insights-1",
        title: "Скрипты и интервью",
        description: "Готовые скрипты для звонков и интервью",
        url: "https://t.me/c/2841278671/631",
        type: "template",
        category: "insights",
      },
      {
        id: "insights-2",
        title: "Кейсы запланов",
        description: "Примеры успешных запланов от ГР",
        url: "https://t.me/c/2841278671/505",
        type: "article",
        category: "insights",
      },
      {
        id: "insights-3",
        title: "Интервью из ГР персонажей",
        description: "Разборы подходов успешных партнеров",
        url: "https://t.me/c/2841278671/501",
        type: "video",
        category: "insights",
      },
      {
        id: "insights-4",
        title: "Старлит культура в Точка Банке",
        description: "Кейс построения партнерской культуры",
        url: "https://t.me/c/2841278671/675",
        type: "article",
        category: "insights",
      },
      {
        id: "insights-5",
        title: "Коллекция скриптов",
        description: "База готовых скриптов для разных ситуаций",
        url: "https://t.me/c/2841278671/485",
        type: "template",
        category: "insights",
      },
    ],
  },
  {
    id: "economics",
    title: "Экономика",
    description: "Расчеты для b2b, команд и примеры сайл-артистов",
    icon: "💰",
    color: "from-green-500 to-emerald-500",
    resources: [
      {
        id: "econ-1",
        title: "Экономика b2b",
        description: "Модели расчетов для B2B продаж",
        url: "https://t.me/c/314852664/313",
        type: "article",
        category: "economics",
      },
      {
        id: "econ-2",
        title: "Примеры расчетов для сайл-артистов",
        description: "Шаблоны экономических моделей",
        url: "https://t.me/c/314852664/313",
        type: "template",
        category: "economics",
      },
      {
        id: "econ-3",
        title: "Экономика команды",
        description: "Как рассчитать экономику партнерской команды",
        url: "https://t.me/c/314852664/315",
        type: "article",
        category: "economics",
      },
    ],
  },
  {
    id: "growth",
    title: "Рост и развитие",
    description: "Модели масштабирования и логика коллабораций",
    icon: "📈",
    color: "from-indigo-500 to-blue-500",
    resources: [
      {
        id: "growth-1",
        title: "Модель развития ScaleX",
        description: "Стратегия роста и масштабирования команд",
        url: "https://t.me/c/2841278671/632",
        type: "video",
        category: "growth",
      },
      {
        id: "growth-2",
        title: "Логика коллабораций",
        description: "Как строить эффективные партнерства",
        url: "https://t.me/c/2841278671/516",
        type: "article",
        category: "growth",
      },
    ],
  },
  {
    id: "teamwork",
    title: "Командная работа",
    description: "Инструменты для работы с командой и коммуникации",
    icon: "🤝",
    color: "from-pink-500 to-rose-500",
    resources: [
      {
        id: "team-1",
        title: "Вводное видео",
        description: "Основы работы с командой партнеров",
        url: "https://t.me/c/314852664/4",
        type: "video",
        category: "teamwork",
      },
      {
        id: "team-2",
        title: "План роста под b2b",
        description: "Стратегии развития B2B направления",
        url: "https://t.me/c/314852664/319",
        type: "article",
        category: "teamwork",
      },
      {
        id: "team-3",
        title: "Как делать коллабы",
        description: "Практическое руководство по коллаборациям",
        url: "https://t.me/c/314852664/311",
        type: "video",
        category: "teamwork",
      },
      {
        id: "team-4",
        title: "Мотивация стейкхолдеров",
        description: "Методы мотивации ключевых участников",
        url: "https://t.me/c/314852664/318",
        type: "article",
        category: "teamwork",
      },
      {
        id: "team-5",
        title: "Поиск лидера команды",
        description: "Как найти и нанять капитана команды",
        url: "https://t.me/c/314127867/1428",
        type: "article",
        category: "teamwork",
      },
      {
        id: "team-6",
        title: "Закрытие амбассадора",
        description: "Процесс привлечения амбассадоров",
        url: "https://t.me/c/2841278671/628",
        type: "article",
        category: "teamwork",
      },
    ],
  },
  {
    id: "leadership",
    title: "Тимлидство",
    description: "Шаблоны, инструкции и инструменты для лидеров команд",
    icon: "⭐",
    color: "from-yellow-500 to-orange-500",
    resources: [
      {
        id: "lead-1",
        title: "Работа капитана/лидера команды",
        description: "Основы эффективного лидерства",
        url: "#",
        type: "article",
        category: "leadership",
      },
      {
        id: "lead-2",
        title: "Рабочие шаблоны и инструкции",
        description: "Готовые документы для работы тимлида",
        url: "#",
        type: "template",
        category: "leadership",
      },
      {
        id: "lead-3",
        title: "Как отметить сбор команды в коллабе",
        description: "Процедуры и регламенты сбора команды",
        url: "#",
        type: "article",
        category: "leadership",
      },
      {
        id: "lead-4",
        title: "Сбалансированное планирование",
        description: "Методы планирования для тимлидов",
        url: "https://t.me/c/2841278671/631",
        type: "article",
        category: "leadership",
      },
      {
        id: "lead-5",
        title: "Отчеты в сообщество",
        description: "Как правильно отчитываться о результатах",
        url: "#",
        type: "template",
        category: "leadership",
      },
    ],
  },
]

export function getAllResources(): Resource[] {
  return categories.flatMap((cat) => cat.resources)
}

export function searchResources(query: string): Resource[] {
  const lowerQuery = query.toLowerCase()
  return getAllResources().filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowerQuery) || resource.description.toLowerCase().includes(lowerQuery),
  )
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id)
}

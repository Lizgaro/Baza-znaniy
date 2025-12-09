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
    id: "team-lead",
    title: "Тимлид",
    description: "Работа с командой, планирование и отчетность",
    icon: "⭐",
    color: "from-yellow-500 to-orange-500",
    resources: [
      {
        id: "lead-1",
        title: "Сбалансированное планирование",
        description: "Методика планирования задач для команды",
        url: "https://t.me/c/2841278671/633",
        type: "video",
        category: "team-lead",
      },
      {
        id: "lead-2",
        title: "План масштабирования скейл-команд в B2B",
        description:
          "Полный пакет для работы капитана: видео ВК, план (2 млн прибыли/500к на команду), шаблон договора, рабочие инструкции, чекины и отчеты",
        url: "https://t.me/c/3148526643/9",
        type: "video",
        category: "team-lead",
      },
    ],
  },
  {
    id: "insights",
    title: "Прокачиваем насмотренность",
    description: "Кейсы, интервью, новости ИИ и книги",
    icon: "👁️",
    color: "from-purple-500 to-indigo-500",
    resources: [
      {
        id: "insight-1",
        title: "Сериалы, интервью, новости ИИ",
        description: "Подборка материалов для развития кругозора",
        url: "https://t.me/c/2841278671/644",
        type: "article",
        category: "insights",
      },
      {
        id: "insight-2",
        title: "Книги маркетинг",
        description: "Библиотека полезной литературы",
        url: "https://t.me/c/2841278671/1804",
        type: "article",
        category: "insights",
      },
      {
        id: "insight-3",
        title: "Интервью из пиарщика в фаундеры",
        description: "История трансформации карьеры",
        url: "https://t.me/c/2841278671/597",
        type: "video",
        category: "insights",
      },
      {
        id: "insight-4",
        title: "Стартап культура в Точка банке",
        description: "Разбор корпоративной культуры и процессов",
        url: "https://t.me/c/2841278671/575",
        type: "video",
        category: "insights",
      },
      {
        id: "insight-5",
        title: "Сериалы",
        description: "Что посмотреть для вдохновения",
        url: "https://t.me/c/2841278671/453",
        type: "article",
        category: "insights",
      },
    ],
  },
  {
    id: "producer",
    title: "Продюссер",
    description: "Работа с воронкой, нейросети и материалы",
    icon: "🎬",
    color: "from-pink-500 to-rose-500",
    resources: [
      {
        id: "prod-1",
        title: "Нейросети для работы",
        description: "Документ с инструментами и промптами для работы с ИИ",
        url: "https://docs.google.com/document/d/1hwqD_Tf6mbjInmokLyLTnxrwt4XraJ6VGR4w9bm5PQs/edit?usp=sharing",
        type: "article",
        category: "producer",
      },
      {
        id: "prod-2",
        title: "Еще больше материалов",
        description: "Дополнительные ресурсы для продюсирования",
        url: "https://t.me/c/2841278671/450",
        type: "article",
        category: "producer",
      },
      {
        id: "prod-3",
        title: "Продюссер бота с воронкой",
        description: "Гайд по созданию и настройке воронок",
        url: "https://t.me/c/3148526643/24",
        type: "video",
        category: "producer",
      },
    ],
  },
  {
    id: "economics",
    title: "Экономика",
    description: "Экономика b2b, команды и примеры расчетов",
    icon: "💰",
    color: "from-green-500 to-emerald-500",
    resources: [
      {
        id: "eco-1",
        title: "Экономика B2B продуктов",
        description: "Как работает экономика в B2B продуктах на схеме с выращиванием партнеров",
        url: "https://docs.google.com/document/d/1VJZqiXXtW8jqDAVd-tqjzACpHInVI7tFKM-Igo3AaQ0/edit?usp=sharing",
        type: "article",
        category: "economics",
      },
      {
        id: "eco-2",
        title: "Экономика команды",
        description: "Как распределять финансы внутри команды",
        url: "https://t.me/c/3148526643/15",
        type: "video",
        category: "economics",
      },
    ],
  },
  {
    id: "growth",
    title: "Рост с ScaleX",
    description: "Модели развития и стратегии роста",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    resources: [
      {
        id: "growth-1",
        title: "Модель развития ScaleX",
        description: "Стратегия масштабирования без инвестиций",
        url: "https://t.me/c/2841278671/632",
        type: "video",
        category: "growth",
      },
      {
        id: "growth-2",
        title: "Логика коллабораций",
        description: "Как строить партнерства для роста",
        url: "https://t.me/c/2841278671/516",
        type: "article",
        category: "growth",
      },
    ],
  },
  {
    id: "team-work",
    title: "Команды и Коллабы",
    description: "Вводные материалы, планы роста и коммуникация",
    icon: "🤝",
    color: "from-indigo-500 to-violet-500",
    resources: [
      {
        id: "tw-0",
        title: "Быстрый Старт",
        description: "Гайд для новичков: с чего начать работу в экосистеме партнеров роста",
        url: "https://docs.google.com/document/d/10Isgjf0wcVpn72QGxi51RFeU21XN9JpYxVq01m-_5QM/edit?usp=sharing",
        type: "article",
        category: "team-work",
      },
      {
        id: "tw-1",
        title: "Вводные видео",
        description: "Базовые материалы для старта работы",
        url: "https://t.me/c/3148526643/4",
        type: "video",
        category: "team-work",
      },
      {
        id: "tw-3",
        title: "Как делать коллабы",
        description: "Инструкция по созданию коллабораций",
        url: "https://t.me/c/3148526643/11",
        type: "video",
        category: "team-work",
      },
      {
        id: "tw-4",
        title: "Мотивация стейкхолдеров",
        description: "Как работать с интересами участников",
        url: "https://t.me/c/3148526643/16",
        type: "article",
        category: "team-work",
      },
      {
        id: "tw-5",
        title: "Гайд найти лидера мнений",
        description: "Как искать и договариваться с инфлюенсерами",
        url: "https://t.me/c/2841278671/643",
        type: "article",
        category: "team-work",
      },
      {
        id: "tw-6",
        title: "Как закрыть стартап + амбассадора",
        description: "Стратегии завершения сделок",
        url: "https://t.me/c/2841278671/578",
        type: "article",
        category: "team-work",
      },
    ],
  },
  {
    id: "support",
    title: "Поддержка",
    description: "Чаты сообщества и мастермайнды",
    icon: "💬",
    color: "from-teal-500 to-green-500",
    resources: [
      {
        id: "sup-1",
        title: "Организация разборов и мастермайндов",
        description:
          "Инструкция: назначение встречи в календаре, анонс в чате скейл-капитанов, запись и публикация для соразвития партнеров",
        url: "https://calendar.app.google/y1RTmocJKREgvyvx6",
        type: "chat",
        category: "support",
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

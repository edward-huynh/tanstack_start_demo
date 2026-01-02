import { createFileRoute } from '@tanstack/react-router'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'

export const Route = createFileRoute('/404')({
  component: NotFoundPage,
})

import { ProgressingPage } from '@/pages/Progressing/ProgressingPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/progressing/')({
  component: ProgressingPage,
})

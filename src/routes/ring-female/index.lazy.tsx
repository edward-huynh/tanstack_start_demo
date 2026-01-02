import { RingFemalePage } from '@/pages/RingFemale/RingFemalePage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/ring-female/')({
  component: RingFemalePage,
})

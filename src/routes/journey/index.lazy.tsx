import { JourneyPage } from '@/pages/Journey/JourneyPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/journey/')({
  component: JourneyPage,
})

// function RouteComponent() {
//   return <JourneyPage />
// }

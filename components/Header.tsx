import { useRouter } from 'next/router'
import { useCallback } from 'react'

const Header = () => {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return <div>Header</div>
}

export default Header

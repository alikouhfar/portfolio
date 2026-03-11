import { RefObject, useEffect, useRef, useState } from 'react'

type UseIntersectionObserverParamsType = {
  targetRef: RefObject<HTMLElement | null>
  observerOptions?: IntersectionObserverInit
}

const useIntersectionObserver = ({
  targetRef,
  observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  },
}: UseIntersectionObserverParamsType): boolean => {
  const [isVisible, setIsVisible] = useState(false)
  const observerInstance = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && targetRef.current) {
      observerInstance.current = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        observerOptions
      )

      observerInstance.current.observe(targetRef.current)
    }

    return () => {
      observerInstance.current?.disconnect()
    }
  }, [targetRef, observerOptions])

  return isVisible
}

export default useIntersectionObserver

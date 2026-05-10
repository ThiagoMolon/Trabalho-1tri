import { useEffect } from 'react'

export default function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.querySelectorAll('.on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}
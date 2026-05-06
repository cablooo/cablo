import { useState, useEffect } from 'react'

export function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 50, pause = 1800 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const t = setTimeout(() => {
      setText(words[index].substring(0, subIndex))
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

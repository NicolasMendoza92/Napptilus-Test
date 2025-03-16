"use client"

import { useRef, useEffect, useState } from "react"

export default function Carousel({ children, initialProgress=0, itemWidth, itemGap, visualIndicator=true, visualIndicatorWidth, className }) {
  const containerRef = useRef(null)
  const progressBarRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(
    visualIndicator && initialProgress === 0 ? visualIndicatorWidth : initialProgress,
  )
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      if (!hasScrolled && scrollLeft > 0) {
        setHasScrolled(true)
      }
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100
      setScrollProgress(scrollPercentage)
    }
  }

  const handleProgressBarClick = (e) => {
    if (!isLargeScreen || !containerRef.current || !progressBarRef.current) return

    const progressBar = progressBarRef.current
    const rect = progressBar.getBoundingClientRect()
    const clickPosition = e.clientX - rect.left
    const percentage = clickPosition / rect.width

    const container = containerRef.current
    const scrollableWidth = container.scrollWidth - container.clientWidth
    const newScrollPosition = percentage * scrollableWidth

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    })
    setHasScrolled(true)
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)

      if (initialProgress > 0) {
        const scrollableWidth = container.scrollWidth - container.clientWidth
        const initialScrollPosition = (initialProgress / 100) * scrollableWidth
        container.scrollLeft = initialScrollPosition
        setHasScrolled(true)
      }

      const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 768) 
      }

      checkScreenSize()
      window.addEventListener("resize", checkScreenSize)

      return () => {
        container.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", checkScreenSize)
      }
    }
  }, [initialProgress])

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__container" ref={containerRef}>
        <div
          className="carousel__content"
          style={{
            "--item-width": `${itemWidth}px`,
            "--item-gap": `${itemGap}px`,
          }}
        >
          {children}
        </div>
      </div>
      <div
        className={`carousel__progress ${isLargeScreen ? "carousel__progress--interactive" : ""}`}
        onClick={handleProgressBarClick}
        ref={progressBarRef}
      >
        <div className="carousel__progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
    </div>
  )
}



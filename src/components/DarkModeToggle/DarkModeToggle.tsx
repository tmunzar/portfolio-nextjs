import React, { ReactElement, useRef, useEffect, useState } from 'react'
import Vivus from 'vivus'
import styles from './DarkModeToggle.module.scss'

export const DarkModeToggle = (): ReactElement => {
  const [vivusDayIconState, setVivusDayIconState] = useState<Vivus>()
  const [vivusNightIconState, setVivusNightIconState] = useState<Vivus>()
  const dayIconSvgRef = useRef<SVGSVGElement>(null)
  const nightIconSvgRef = useRef<SVGSVGElement>(null)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') == 'dark') {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      }
    }
  })

  useEffect(() => {
    const currentRef = dayIconSvgRef.current as unknown as string // wonky type casting ?
    setVivusDayIconState(
      new Vivus(currentRef, {
        duration: 25,
        type: 'oneByOne',
        pathTimingFunction: Vivus.EASE_IN,
        start: 'autostart',
      })
    )
  }, [dayIconSvgRef])

  useEffect(() => {
    const currentRef = nightIconSvgRef.current as unknown as string // wonky type casting ?
    setVivusNightIconState(
      new Vivus(currentRef, {
        duration: 25,
        type: 'oneByOne',
        pathTimingFunction: Vivus.EASE_IN,
        start: 'autostart',
      })
    )
  }, [nightIconSvgRef])

  const onDarkModeToggle = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      vivusDayIconState?.finish().play(-1, () => {
        setIsDarkMode(false)
        vivusNightIconState?.reset().play()
      })
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      vivusNightIconState?.finish().play(-1, () => {
        setIsDarkMode(true)
        vivusDayIconState?.reset().play()
      })
    }
  }

  return (
    <div className={styles.root}>
      <button
        onClick={onDarkModeToggle}
        className={styles.darkModeButton}
        aria-label="Toggle Dark Mode"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={nightIconSvgRef}
          className={styles.nightIcon}
          style={{ display: isDarkMode ? 'none' : 'block' }}
        >
          <path
            d="M5.61424 18.9742C2.2913 13.2121 4.263 5.84377 10.0189 2.51693C10.3454 2.32794 10.6792 2.15606 11.0184 2C8.36935 6.16744 8.1535 11.5747 10.719 16.0241C13.2845 20.4735 18.0698 22.9891 23 22.7764C22.6954 22.9925 22.3795 23.1953 22.0527 23.3839C16.2972 26.7107 8.93727 24.7367 5.61424 18.9742Z"
            stroke="black"
            stroke-width="1"
          />
        </svg>

        <svg
          width="32px"
          height="32px"
          version="1.1"
          viewBox="150 80 400 400"
          xmlns="http://www.w3.org/2000/svg"
          ref={dayIconSvgRef}
          className={styles.dayIcon}
          style={{ display: isDarkMode ? 'block' : 'none' }}
        >
          <path
            transform="matrix(5.6 0 0 5.6 70 3.979e-14)"
            d="m65 50c0 8.284-6.716 15-15 15s-15-6.716-15-15 6.716-15 15-15 15 6.716 15 15"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(3.43e-16 5.6 -5.6 3.43e-16 378 123.2)"
            d="m6.0001 5h-10"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(3.43e-16 5.6 -5.6 3.43e-16 680.4 425.6)"
            d="m5.9999 59h-10"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(-5.6 6.86e-16 -6.86e-16 -5.6 506.8 308)"
            d="m6.0001 5h-10"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(-5.6 6.86e-16 -6.86e-16 -5.6 204.4 610.4)"
            d="m5.9999 59h-10"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(-3.9598 3.9598 -3.9598 -3.9598 480.67 188.92)"
            d="m5.9996 5h-9.9999"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(-3.9598 3.9598 -3.9598 -3.9598 480.67 616.58)"
            d="m6.0003 59h-9.9999"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(-3.9598 -3.9598 3.9598 -3.9598 441.08 410.67)"
            d="m5.9996 5h-9.9999"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            transform="matrix(-3.9598 -3.9598 3.9598 -3.9598 13.417 410.67)"
            d="m6.0003 59h-9.9999"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div className={styles.tooltip}>
        <span>{isDarkMode ? 'Turn off Dark Mode' : 'Turn on Dark Mode'}</span>
      </div>
    </div>
  )
}

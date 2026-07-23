import { useTransform } from 'framer-motion'

/*
  Port of Elementis' useMaskImage — the "cut cut cut" reveal.
  Builds a linear-gradient mask made of `divisions` vertical bands. Each band
  reveals in sequence as `localProgress` advances 0 → 1, so the underlying
  image reads as many small horizontal strips wiping in one after the other
  rather than a single clip line.
*/
export default function useMaskImage(localProgress, isMobile, config) {
  const { divisions = 28, inset = 0, gap = 0.35, vh = 130 } = config ?? {}

  const func = (i, latest) => {
    const buffer = (1 - 2 * inset - gap) / (divisions - 1)
    if (inset + i * buffer > latest) return 0
    if (inset + gap + i * buffer < latest) return 1
    return (latest - (inset + i * buffer)) / gap
  }

  return useTransform(localProgress, (latest) => {
    if (typeof isMobile !== 'boolean') return ''
    if (isMobile) {
      return `linear-gradient(to top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) ${latest * 100}% ,rgba(0,0,0,1) ${latest * 100}%,rgba(1,1,1,1) 100%)`
    }
    let temp = ''
    for (let i = 0; i < divisions; i++) {
      const bandStart = i * (vh / divisions)
      const bandMid = func(i, latest) * (vh / divisions) + bandStart
      const bandEnd = (i + 1) * (vh / divisions)
      temp += `rgba(0,0,0,0) ${bandStart}vh ,rgba(0,0,0,0) ${bandMid}vh,rgba(0,0,0,1) ${bandMid}vh,rgba(0,0,0,1) ${bandEnd}vh`
      if (i !== divisions - 1) temp += ','
    }
    return `linear-gradient(to top,${temp})`
  })
}

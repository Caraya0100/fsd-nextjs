export interface ThemeColors {
  accent: string
  bg: string
  text: string
  heading: string
  highlightText: string
  primaryFill: string
  secondaryFill: string
  primaryStroke: string
  secondaryStroke: string
  border: string
}

export const LIGHT_MODE: ThemeColors = {
  accent: 'bg-green-300',
  bg: 'bg-white',
  text: 'text-neutral-600',
  heading: 'text-[#000000]',
  highlightText: 'text-stone-800',
  primaryFill: 'fill-[#000000]',
  secondaryFill: 'fill-[#A188EC]',
  primaryStroke: 'stroke-[#000000]',
  secondaryStroke: 'stroke-[#A188EC]',
  border: 'border-neutral-200',
} as const

export const DARK_MODE: ThemeColors = {
  accent: 'dark:bg-green-700',
  bg: 'dark:bg-black',
  text: 'dark:text-neutral-300',
  heading: 'dark:text-white',
  highlightText: 'dark:text-white',
  primaryFill: 'dark:fill-[#E1BDBD]',
  secondaryFill: 'dark:fill-[#2E02B4]',
  primaryStroke: 'dark:stroke-[#E1BDBD]',
  secondaryStroke: 'dark:stroke-[#2E02B4]',
  border: 'dark:border-neutral-800',
} as const

export const THEME_COLORS: ThemeColors = {
  accent: `${LIGHT_MODE.accent} ${DARK_MODE.accent}`,
  bg: `${LIGHT_MODE.bg} ${DARK_MODE.bg}`,
  text: `${LIGHT_MODE.text} ${DARK_MODE.text}`,
  heading: `${LIGHT_MODE.heading} ${DARK_MODE.heading}`,
  highlightText: `${LIGHT_MODE.highlightText} ${DARK_MODE.highlightText}`,
  primaryFill: `${LIGHT_MODE.primaryFill} ${DARK_MODE.primaryFill}`,
  secondaryFill: `${LIGHT_MODE.secondaryFill} ${DARK_MODE.secondaryFill}`,
  primaryStroke: `${LIGHT_MODE.primaryStroke} ${DARK_MODE.primaryStroke}`,
  secondaryStroke: `${LIGHT_MODE.secondaryStroke} ${DARK_MODE.secondaryStroke}`,
  border: `${LIGHT_MODE.border} ${DARK_MODE.border}`,
}

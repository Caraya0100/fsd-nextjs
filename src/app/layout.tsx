import type { Metadata } from 'next'

import './globals.css'

import { GLOBAL_METADATA } from '@entities/metadata'

import { Layout } from '@widgets/layout'

export const metadata: Metadata = GLOBAL_METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Layout>{children}</Layout>
}

import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const thiccboi = localFont({
	src: [
		{
			path: '../public/Webfont/THICCCBOI-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/Webfont/THICCCBOI-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	]
})

export const metadata: Metadata = {
	title: 'ioni.ai - ChatGPT-4 solution for customer support',
	description: 'Recreation of the landing and pricing pages',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={thiccboi.className}>{children}</body>
		</html>
		)
}

export const metadata = {
  title: 'My Dashboard',
  description: 'Pay your utility bills here',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

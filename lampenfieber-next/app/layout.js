import './globals.css'

export const metadata = {
  title: 'Lampenfieber — Dein Content hat Auftritt',
  description: 'KI-gestütztes Content-Tool für kleine und mittlere Unternehmen. Ein Event beschreiben, alle Kanäle bespielen.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

import Nav from '@components/Nav'
import '@styles/globals.css'
import Provider from '@components/Provider'

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black to-slate-950 w-screen h-screen  overflow-x-hidden flex flex-col" >
      <Provider>
        <main className='flex flex-col'>
          <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
import Nav from '@components/Nav'
import '@styles/globals.css'
import Provider from '@components/Provider'

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black to-orange-950 w-screen h-screen bg-fixed  overflow-x-hidden flex flex-col" >
      <Provider>
        <main className='flex flex-col'>
          <Nav/>
          <div className='mt-20 text-white mx-5 lg:mx-72'>
          {children}
          </div>
        </main>
        </Provider>
      </body>
    </html>
  )
}
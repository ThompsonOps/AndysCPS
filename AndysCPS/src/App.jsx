import { useEffect } from 'react'
import Header from './components/Header'
import ServiceAreas from './components/ServiceAreas'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://online-booking.housecallpro.com/script.js?token=1bfceaf3a3a446bbb521a95a13bb63fc&orgName=Andys-Complete-Plumbing-Service"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="Home" className="min-h-screen flex flex-col font-sans bg-slate-900 text-slate-100 selection:bg-blue-500/30">
      
      <Header />

      
      <main className=".flex-grow w-full max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Hero Box */}
        <section className="min-h-[80vh] flex items-center justify-center py-16 md:py-24 border-b border-slate-800/60">
          <div className="relative w-full `bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-slate-700/40 shadow-2xl overflow-hidden">
            
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-8">
              
             
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide text-blue-400 uppercase">
                <span>🔧 Over 20 Years of Industry Experience</span>
              </div>

              {/* Hero Title */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Honest, Reliable Plumbing <br className="hidden md:inline" />
                <span className="bg-gradient-to-r` from-blue-400 via-[#027be3] to-blue-500 bg-clip-text text-transparent">
                  You Can Depend On.
                </span>
              </h2>

              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                Andy’s Complete Plumbing Service is a family-owned business bringing exceptional expertise to homes and businesses across Northern California. We deliver affordable, comprehensive solutions for everything from routine daily maintenance to emergency repairs and complex pipe installations. 
              </p>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-4">
                We treat our clients with honesty, integrity, and respect by offering fair, straightforward pricing on every single project. Andy's ensures you receive top-tier plumbing care every time.
              </p>

              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button 
                  data-token="1bfceaf3a3a446bbb521a95a13 badge-token" 
                  data-orgname="Andys-Complete-Plumbing-Service" 
                  className="hcp-button w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 transform text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-900/20 transition text-center text-lg"
                  onClick={() => window.HCPWidget?.openModal()}
                > 
                  Book Free Estimate Now 
                </button>
                
               
              </div>

            </div>
          </div>
        </section>

       
        <ServiceAreas />



        <Services />

        {/* Secondary Booking Action Block */}
        <div className="flex justify-center py-16">
          <button 
            data-token="1bfceaf3a3a446bbb521a95a13bb63fc" 
            data-orgname="Andys-Complete-Plumbing-Service" 
            className="hcp-button bg-green-600 hover:bg-green-700 active:scale-95 transform text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition"
            onClick={() => window.HCPWidget?.openModal()}
          > 
            Book Online Now 
          </button>
        </div>

        <Reviews />
      </main>

      <Footer />

    </div>
  )
}

export default App
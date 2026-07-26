export default function ServiceAreas() {
  
  const locations = [
    { city: "Yuba City", county: "Sutter County" },
    { city: "Marysville", county: "Yuba County" },
    { city: "Linda", county: "Yuba County" },
    { city: "Plumas Lake", county: "Yuba County" },
    { city: "Wheatland", county: "Yuba County" },
    { city: "Lincoln", county: "Placer County" },
    { city: "Roseville", county: "Placer County" },
    { city: "Sacramento", county: "Sacramento County" }
  ]

  return (
    <section id="ServiceAreas" className="scroll-mt-28 py-12 border-b border-slate-800/60">
      <div className="bg-linear-to-r from-slate-800/30 via-slate-800/50 to-slate-800/30 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700/40 shadow-xl">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left Side: Callout Text */}
          <div className="space-y-2 max-w-md">
            <div className="inline-flex items-center space-x-1.5 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-red-400">
              <span className="animate-pulse mr-1">📍</span> Service Locations
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Areas We Serve
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Proudly based in the Yuba-Sutter region and serving residential and commercial clients all the way down to Sacramento.
            </p>
          </div>

          {/* Right Side: Geographically Ordered Grid */}
         <div className="grow max-w-xl w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {locations.map((loc, index) => (
                <div 
                  key={index} 
                  className="bg-slate-900/60 border border-slate-700/30 hover:border-blue-500/40 rounded-xl p-3 text-center transition duration-200 group shadow-sm flex flex-col justify-center min-h-[68px]"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors block leading-tight break-keep hyphens-none whitespace-nowrap overflow-hidden text-ellipsis">
                    {loc.city}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold leading-normal break-keep hyphens-none">
                    {loc.county}
                  </span>
                </div>
              ))}
            
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
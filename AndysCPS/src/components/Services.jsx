import { useEffect, useRef, useState } from 'react'

function AnimatedServiceCard({ children, borderLineColor, delayClass = 'delay-0' }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        {
          threshold: 0.01, 
          rootMargin: '-20px 0px -40px 0px' 
        }
      )

      if (cardRef.current) {
        observer.observe(cardRef.current)
      }
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <li
      ref={cardRef}
      
      className={`bg-slate-800/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl transition-all duration-1000 ease-out transform ${delayClass} ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-none' 
          : 'opacity-0 translate-y-28 scale-95 blur-sm'
      }`}
    >
      <div className={`border-l-4 ${borderLineColor} pl-6 md:pl-8`}>
        {children}
      </div>
    </li>
  )
}

export default function Services() {
  return (
    
    <section id="Services" className="scroll-mt-28 space-y-16 py-32 min-h-screen">
      
      {/* Header section */}
      <div className="space-y-6 max-w-3xl pb-6">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight border-b border-slate-800 pb-4 text-white">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          We offer a wide range of residential and commercial plumbing services to meet all your needs, including:
        </p>
      </div>
      
      {/* Cards container list */}
      <ul className="space-y-24 list-none pl-0">
        
        {/* Card 1 */}
        <AnimatedServiceCard borderLineColor="border-blue-500" delayClass="delay-100">
          <strong className="text-2xl md:text-3xl text-blue-400 block mb-4 tracking-tight">
            Drain and Sewer Services
          </strong>
          <p className="text-base md:text-lg text-slate-400 mb-6 font-medium">
            We maintain, clear blockages, and restore optimal waste flow:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300 text-base md:text-lg">
            <li><span className="text-white font-semibold">Drain Cleaning:</span> Clearing slow or clogged sinks, showers, bathtubs, and sewer mains.</li>
            <li><span className="text-white font-semibold">Hydro-Jetting:</span> Utilizing high-pressure water to clear away grease and heavy sludge buildup.</li>
            <li><span className="text-white font-semibold">Sewer Line Repair:</span> Fixing or replacing cracked, collapsed, or root-invaded main sewer lines.</li>
            <li><span className="text-white font-semibold">Camera Inspections:</span> Inserting specialized fiber optic video cameras into lines to pinpoint clogs or structural damage.</li>
          </ul>
        </AnimatedServiceCard>

        {/* Card 2 */}
        <AnimatedServiceCard borderLineColor="border-blue-500" delayClass="delay-200">
          <strong className="text-2xl md:text-3xl text-blue-400 block mb-4 tracking-tight">
            General Repairs and Fixture Installations
          </strong>
          <p className="text-base md:text-lg text-slate-400 mb-6 font-medium">
            We handle everyday wear-and-tear issues as well as structural system upgrades.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300 text-base md:text-lg">
            <li><span className="text-white font-semibold">Fixture Replacement:</span> Installing or fixing toilets, sinks, faucets, showers, and bathtubs.</li>
            <li><span className="text-white font-semibold">Pipe Repair & Repiping:</span> Fixing burst pipes or replacing networks of old, corroded galvanized steel with modern copper or PEX lines.</li>
            <li><span className="text-white font-semibold">Garbage Disposals:</span> Repairing jammed kitchen disposals or installing newer, high-efficiency models.</li>
          </ul>
        </AnimatedServiceCard>

        {/* Card 3 */}
        <AnimatedServiceCard borderLineColor="border-blue-500" delayClass="delay-300">
          <strong className="text-2xl md:text-3xl text-blue-400 block mb-4 tracking-tight">
            Water Heater Services
          </strong>
          <p className="text-base md:text-lg text-slate-400 mb-6 font-medium">
            Hot water systems require constant upkeep and specialized maintenance.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300 text-base md:text-lg">
            <li><span className="text-white font-semibold">Traditional Tank Heaters:</span> Flushing hard water sediment, replacing faulty heating elements, or swapping old tanks.</li>
            <li><span className="text-white font-semibold">Tankless Water Heaters:</span> Installing energy-efficient, on-demand units and executing routine descaling.</li>
          </ul>
        </AnimatedServiceCard>

        {/* Card 4 */}
        <AnimatedServiceCard borderLineColor="border-blue-500" delayClass="delay-500">
          <strong className="text-2xl md:text-3xl text-blue-400 block mb-4 tracking-tight">
            Specialized and Advanced Services
          </strong>
          <ul className="list-disc pl-6 space-y-3 text-slate-300 text-base md:text-lg">
            <li><span className="text-white font-semibold">Emergency Plumbing Services:</span> Offering 24/7 dispatching for catastrophic scenarios like major sewage backups or flooding.</li>
            <li><span className="text-white font-semibold">Sump Pumps:</span> Installing, testing, and replacing basement sump pumps to prevent seasonal flooding.</li>
            <li><span className="text-white font-semibold">Water Treatment Systems:</span> Fitting whole-house water softeners, filtration setups, and purification loops.</li>
            <li><span className="text-white font-semibold">Gas Line Services:</span> Testing, repairing, and running dedicated gas lines for kitchen appliances, water heaters, and outdoor fixtures.</li>
          </ul>
        </AnimatedServiceCard>
      </ul>
    </section>
  )
}
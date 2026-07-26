export default function Footer() {
    return (


      <footer className="bg-gray-900 text-gray-400 text-sm mt-12 p-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-white">&copy; 2026 Andy's Complete Plumbing Service. All rights reserved.</p>
            <p>License#: 1156867</p>
            <p>Office: (530) 315-0316</p>
          </div>
          <div className="md:text-right">
            <p>Contact us: <a href="mailto:andyscompleteplumbingservice@gmail.com" className="text-blue-400 hover:underline">andyscompleteplumbingservice@gmail.com</a></p>
            <p className="text-xs text-gray-500 mt-2">Site Built and Maintained by Benjamin D Thompson (Ben.Thompson2106@outlook.com)</p>
          </div>
        </div>
      </footer>

        )
    }
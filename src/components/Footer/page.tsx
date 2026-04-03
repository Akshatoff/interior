function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-6xl md:text-7xl font-semibold mb-10 tracking-tight">
              Engage with Us in <br /> Conversation.
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              In a global world based on communication, a brand must look beyond
              its borders, open up to new experiences, and dare to be different.
              Meeting the brightest minds of one's time is the most effective
              way to nurture creativity.
            </p>
          </div>

          {/* Right: Featured Image */}
          <div className="rounded-[2.5rem] overflow-hidden h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
              alt="Conversation Space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative">
          <div>
            <h4 className="font-semibold mb-6 text-lg">About</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Story
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Store Locator
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Sustainability
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Prices and Payments
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Shipping
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Return Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Social Media</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Instagram
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Facebook
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Linkedin
              </li>
            </ul>
          </div>

          {/* Large Brand Mark */}
          <div className="flex items-end justify-end col-span-full md:col-span-1">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter opacity-100">
              Poliform
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

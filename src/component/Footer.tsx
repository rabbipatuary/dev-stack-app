import logo from '../assets/logo-text.png'
const Footer = () => {

  return (

    <footer className="w-full border-t border-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="space-y-3">

          <div className="flex items-center gap-2">

            <img src={logo} alt="logo" />

            

          </div>

          <p className="text-gray-500 text-sm">
            Curated tools, technologies, and resources for developers building
modern software.
          </p>

          <div className="flex gap-4 text-sm font-medium">

            <span>GitHub</span>

            <span>Twitter</span>

            <span>LinkedIn</span>

          </div>

        </div>

        <div className="space-y-2">

          <h2 className="font-semibold text-sm">PRODUCT</h2>

          <ul className="space-y-2 text-sm text-gray-500">

            <li>Home</li>

            <li>Technologies</li>

            <li>Projects</li>

          </ul>

        </div>

        <div className="space-y-2">

          <h2 className="font-semibold text-sm">COMPANY</h2>

          <ul className="space-y-2 text-sm text-gray-500">

            <li>About</li>

            <li>Contact</li>

            <li>Careers</li>

          </ul>

        </div>

        <div className="space-y-2">

          <h2 className="font-semibold text-sm">LEGAL</h2>

          <ul className="space-y-2 text-sm text-gray-500">

            <li>Privacy Policy</li>

            <li>Terms of Service</li>

          </ul>

        </div>

      </div>

      <div className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between text-sm text-gray-400">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">

            <span>Privacy</span>

            <span>Terms</span>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;
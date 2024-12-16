import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Business Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">User Analytic</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">IOS & Android</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">API</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="text-center text-gray-600">Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}


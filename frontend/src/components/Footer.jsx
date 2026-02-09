import { Link } from "react-router-dom"
import { Leaf, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1f3d2b] text-[#e8f0eb]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* LOGO & ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-green-400" />
            <h2 className="text-xl font-serif font-semibold">Yoga Blog</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Discover yoga blogs, mindfulness practices, and wellness tips
            to keep your body flexible and your mind calm.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-green-400">Blogs</Link></li>
            <li><Link to="/login" className="hover:text-green-400">Login</Link></li>
            <li><Link to="/register" className="hover:text-green-400">Sign Up</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Beginner Yoga</li>
            <li>Pranayama Guides</li>
            <li>Meditation Tips</li>
            <li>Wellness Articles</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/" target="_blank" className="hover:text-green-400">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" className="hover:text-green-400">
              <Facebook size={20} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" className="hover:text-green-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="flex gap-6 hover:text-green-400 font-medium">
            <Link to="/terms" className="hover:underline">  
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Yoga Blog. All rights reserved.
      </div>
    </footer>
  )
}

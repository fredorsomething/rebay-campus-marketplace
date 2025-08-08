export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ReBay</h3>
            <p className="text-gray-600 text-sm">
              The campus marketplace for boarding school students to buy and sell items safely and easily.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-primary-600">Home</a></li>
              <li><a href="/categories" className="hover:text-primary-600">Categories</a></li>
              <li><a href="/about" className="hover:text-primary-600">About</a></li>
              <li><a href="/contact" className="hover:text-primary-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/help" className="hover:text-primary-600">Help Center</a></li>
              <li><a href="/safety" className="hover:text-primary-600">Safety Guidelines</a></li>
              <li><a href="/terms" className="hover:text-primary-600">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-primary-600">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/feedback" className="hover:text-primary-600">Feedback</a></li>
              <li><a href="/suggestions" className="hover:text-primary-600">Suggestions</a></li>
              <li><a href="/report" className="hover:text-primary-600">Report Issue</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 ReBay. Made with ❤️ for boarding school students.
          </p>
        </div>
      </div>
    </footer>
  )
}

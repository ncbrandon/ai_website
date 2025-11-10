export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Town of West Jefferson</h3>
            <p className="text-primary-foreground/80 text-sm">Water Resources Department</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/ccr" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Consumer Report
                </a>
              </li>
              <li>
                <a href="/wwtp" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  WWTP Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-primary-foreground/80 text-sm">
              Email: waterresources@westjefferson.gov
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/70 text-center">
          <p>&copy; {new Date().getFullYear()} Town of West Jefferson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Town of West Jefferson</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4">Water Resources Management</p>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Committed to providing safe, clean, and reliable water services to our community
            </p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Services & Information</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CCR Card */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Consumer Confidence Report</h3>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">
                Annual report on the quality of drinking water provided by the Town of West Jefferson
              </p>
              <Link
                href="/ccr"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded-lg font-medium transition-colors"
              >
                View Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>

            {/* WWTP Card */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Wastewater Treatment Plant</h3>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">
                Information and documentation regarding our wastewater treatment facility operations
              </p>
              <Link
                href="/wwtp"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium transition-colors"
              >
                View Documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary mb-4">About Our Water Resources Department</h3>
            <p className="text-foreground/70 mb-4">
              The Water Resources Department is dedicated to managing and maintaining the water supply and wastewater
              services for the Town of West Jefferson. We are committed to environmental stewardship, public health, and
              regulatory compliance.
            </p>
            <p className="text-foreground/70">
              Our team works around the clock to ensure that residents and businesses have access to clean, safe
              drinking water and reliable wastewater treatment services.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

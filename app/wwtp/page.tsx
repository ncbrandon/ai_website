import Footer from "@/components/footer"

export default function WWTPPage() {
  return (
    <main>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Wastewater Treatment Plant</h1>
          <p className="text-lg text-foreground/70 mb-8">Facility Documentation and Operations</p>

          {/* PDF Viewer Section */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg mb-8">
            <div className="bg-accent/5 border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h2 className="font-semibold text-accent">WWTP_Operations_2024.pdf</h2>
                  <p className="text-sm text-foreground/60">PDF Document</p>
                </div>
              </div>
              <a
                href="/documents/wwtp-sample.pdf"
                download="WWTP_Operations_2024.pdf"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="p-6 bg-muted/30">
              <div className="bg-white rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-foreground/30 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-foreground/50">PDF Preview</p>
                  <p className="text-sm text-foreground/40">Click download to view the full document</p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-accent mb-2">Facility Information</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-foreground/70">Facility Type</dt>
                  <dd className="text-foreground">Secondary Treatment Plant</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-foreground/70">Last Updated</dt>
                  <dd className="text-foreground">March 2025</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-foreground/70">Capacity</dt>
                  <dd className="text-foreground">2.5 Million Gallons/Day</dd>
                </div>
              </dl>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-accent mb-2">About WWTP</h3>
              <p className="text-foreground/70">
                Our Wastewater Treatment Plant operates 24/7 to safely treat and return wastewater to the environment.
                This document contains operational data, compliance records, and facility specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

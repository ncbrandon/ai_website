import Footer from "@/components/footer"

export default function CCRPage() {
  return (
    <main>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Consumer Confidence Report</h1>
          <p className="text-lg text-foreground/70 mb-8">Annual Water Quality Report for Town of West Jefferson</p>

          {/* PDF Viewer Section */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg mb-8">
            <div className="bg-primary/5 border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h2 className="font-semibold text-primary">CCR_Report_2024.pdf</h2>
                  <p className="text-sm text-foreground/60">PDF Document</p>
                </div>
              </div>
              <a
                href="/documents/ccr-sample.pdf"
                download="CCR_Report_2024.pdf"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors text-sm"
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
                  <p className="text-sm text-foreground/40">Click download to view the full report</p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Report Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-foreground/70">Report Period</dt>
                  <dd className="text-foreground">January 1 - December 31, 2024</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-foreground/70">Released</dt>
                  <dd className="text-foreground">March 2025</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-foreground/70">Coverage Area</dt>
                  <dd className="text-foreground">Town of West Jefferson</dd>
                </div>
              </dl>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">What is the CCR?</h3>
              <p className="text-foreground/70">
                The Consumer Confidence Report is an annual report that municipal water systems are required to provide
                to customers. It details the quality of your drinking water and information about its source and
                treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

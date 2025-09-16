export const metadata = {
  title: 'Contact — SONOMIQ',
  description: 'Get in touch with SONOMIQ. We help imaging teams optimize schedules and lower WRMSD risk.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Contact SONOMIQ
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              Have questions about optimizing imaging schedules or early access? We’d love to help.
            </p>
            <div className="rounded-2xl bg-white shadow-xl border border-slate-100 p-10">
              <div className="text-left space-y-6">
                <div>
                  <h2 className="text-xl font-medium text-slate-800 mb-2">Email</h2>
                  <a href="mailto:marcus.tossmann@sonomiq.com" className="text-blue-600 hover:text-blue-700">
                    marcus.tossmann@sonomiq.com
                  </a>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-slate-800 mb-2">About SONOMIQ</h2>
                  <p className="text-slate-600">
                    SONOMIQ PTY LTD is an add-on to medical imaging schedulers that bakes evidence-based rules into rosters to lower
                    WRMSD risk, protect sonographers, and stabilize clinic capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



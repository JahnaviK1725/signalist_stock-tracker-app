import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
              <Link href="/" className="auth-logo">
              <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className='h-8 w-auto'/>
              </Link>

               <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>
            <section className="auth-right-section ">
                <div className="z-10 relative lg: mt-4 lg:mb-16">
                  <blockquote className="auth-blockquote">My watchlist finally started performing. The alerts are incredibly accurate, and I feel far more confident in my trading decisions.
                  </blockquote>

                    <div className="flex items-center justify-between">
                        <div>
                            <cite className="auth-testimonial-author">-Ethan R</cite>
                            <p className="max-md: text-xs text-gray-500">Retail Investor</p>

                        </div>

                    </div>
                </div>
                <div className="flex-1 relative">
                    <Image src="/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"/>
                </div>
            </section>
        </main>
    );
};

export default Layout;

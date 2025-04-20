import Link from "next/link";
import { ArrowRight, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-white flex flex-col">
      <header className="border-b border-gray-800 mb-6">
        <div className="flex h-16 items-center justify-center px-4 md:px-6">
          <div className="flex w-full max-w-4xl items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">Sassy Cloudinary</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link href="/sign-up">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-950 hover:text-white transition-colors duration-300"
                >
                  Sign up
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-64px-96px)] px-4 md:px-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
              <div className="space-y-3 md:space-y-4">
                <div className="inline-block rounded-lg bg-blue-950 px-3 py-1 text-sm text-blue-400">
                  Introducing Sassy Cloudinary
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Smart Media Processing for the Modern Web
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
                  Compress, crop, and optimize your images and videos with
                  AI-powered precision. Share across platforms with a single
                  click.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://devsyn.tech">
                  <Button
                    variant="outline"
                    className="border-gray-700 bg-blue-400 text-white hover:bg-gray-800"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="relative w-full max-w-3xl mx-auto mt-8 rounded-lg overflow-hidden border border-gray-800">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-blue-950 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-xl font-medium text-white/80">
                    <Zap className="h-6 w-6 text-blue-500" />
                    <span>AI-Powered Media Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 text-gray-400 py-12 flex flex-col items-center text-center gap-4">
          <p className="text-sm">
            © 2025 Sassy Cloudinary. All rights reserved.
          </p>
          <p className="text-sm">
            Built with ❤️ by{" "}
            <a
              href="https://devsyn.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Sarthak Priyadarshi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

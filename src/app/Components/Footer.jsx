export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-center py-16">
      {/* Blurred Yellow Shape (same style as Hero) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[600px] bg-amber-300 rounded-bl-[200px] rounded-tr-[800px] blur-2xl opacity-10 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold pb-3">DevBlog</h2>

        <p className="text-sm max-w-xl mx-auto pb-6">
          Sharing practical web development tutorials, project guides, and UI
          inspiration with React, Next.js, and the MERN stack.
        </p>

        <div className="flex justify-center gap-8 text-sm font-semibold pb-8">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="text-xs opacity-70">
          © {new Date().getFullYear()} DevBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

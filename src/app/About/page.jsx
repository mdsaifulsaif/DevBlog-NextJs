export default function AboutPage() {
  return (
    <div className="relative overflow-hidden min-h-screen py-20 px-6">
      {/* Blur Shape (same as Hero/Footer) */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[600px] md:h-[700px] bg-amber-300 rounded-bl-[200px] rounded-tr-[800px] blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">About This Blog</h1>

        {/* Intro */}
        <p className="text-lg leading-8 max-w-3xl mx-auto mb-16">
          This blog is a space where I share my journey as a web developer —
          building real-world projects with React, Next.js, and the MERN stack.
          Here you’ll find practical tutorials, UI inspiration, and lessons
          learned while creating modern web applications.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why I Started</h2>
            <p className="leading-7 text-sm">
              I created this blog to document my learning process and help other
              beginner developers understand concepts in a simple, practical
              way. Most tutorials online skip real-world problems — here, I
              focus on solving them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">What You’ll Learn</h2>
            <p className="leading-7 text-sm">
              From building full-stack MERN applications to designing clean UI
              with Tailwind CSS, this blog covers step-by-step guides, project
              breakdowns, and tips you can directly apply to your own projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">My Goal</h2>
            <p className="leading-7 text-sm">
              My goal is to make learning web development easier, more
              practical, and less confusing. I believe in learning by building —
              and that’s exactly what this blog promotes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Let’s Connect</h2>
            <p className="leading-7 text-sm">
              If you enjoy these articles, feel free to explore more posts,
              share feedback, or connect with me. Let’s grow together as
              developers and create amazing things for the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6"></div>
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              {
                "I'm a passionate computer science engineering student at ENICarthage with strong interest in full-stack development and machine learning. I love creating impactful digital solutions—from smart robotics to modern web applications. I’ve already built real-time AI-powered systems."
              }
            </p>
            <p className="text-lg text-muted-foreground mb-6">
             I'm always exploring new technologies and sharing what I learn. Whether it's experimenting with OpenCV, contributing to open-source, or developing creative web projects, I'm always pushing to learn and grow.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

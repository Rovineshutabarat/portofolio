export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative rounded-2xl shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff] p-1">
                <img
                  src="https://i0.wp.com/continuingmissionsta.com/wp-content/uploads/2019/07/Bortus-ORV-1.jpg?fit=1950%2C1462&ssl=1"
                  alt="Talu Samajaya Zendrato"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-6 text-gray-700">
              <h3 className="text-2xl font-semibold mb-4">
                Passionate Backend Developer with a Vision
              </h3>
              <p className="leading-relaxed">
                As a computer science student with strong hands-on experience in
                backend development, I focus on building robust and scalable
                server-side applications. My journey began with a curiosity
                about how systems work behind the scenes, which grew into a
                passion for designing efficient APIs and database architectures.
              </p>
              <p className="leading-relaxed">
                I believe in writing clean, maintainable code and following best
                practices. When I'm not coding, you'll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-[#e0e0e0] p-4 rounded-xl shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff] text-center">
                  <h4 className="font-semibold mb-2 text-gray-600">
                    Learning Journey
                  </h4>
                  <p className="text-2xl font-bold text-gray-800">3+ Years</p>
                </div>
                <div className="bg-[#e0e0e0] p-4 rounded-xl shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff] text-center">
                  <h4 className="font-semibold mb-2 text-gray-600">
                    Personal Projects
                  </h4>
                  <p className="text-2xl font-bold text-gray-800">10+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

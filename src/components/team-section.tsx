import Image from "next/image"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      image: "/meet-1.png",
      username: "Username",
      profession: "Profession",
      background: "bg-amber-400",
    },
    {
      id: 2,
      image: "/meet-2.jpg",
      username: "Username",
      profession: "Profession",
      background: "bg-gray-100",
    },
    {
      id: 3,
      image: "/meet-3.jpg",
      username: "Username",
      profession: "Profession",
      background: "bg-blue-600",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className={`w-full aspect-square relative mb-6 ${member.background}`}>
                <Image
                  src={member.image}
                  alt={member.username}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {member.username}
              </h3>
              <p className="text-gray-600 mb-4">{member.profession}</p>
              <div className="flex space-x-5">
                <a 
                  href="#" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { MoveUpRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F] overflow-hidden relative">

      {[...Array(5)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-[2px] bg-[#6689A712]"
          style={{
            top: `${(100 / 2) * (i + 1)}%`,
            left: "0",
            right: "0",
          }}
        />
      ))}

      {[...Array(7)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-[2px] bg-[#6689A712]"
          style={{
            left: `calc(${(100 / 8) * (i + 1)}%)`,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF451A] mb-2">
            Are you interested?
          </h2>
          <p className="flex items-center justify-center gap-2 text-white text-lg md:text-xl font-medium group cursor-pointer transition-colors duration-200 hover:text-[#FF451A]">
            Let&apos;s talk
            <MoveUpRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-[#1A1A1A] to-[#2A2A2A] p-1">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/talk.png"
              alt="Let's talk"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />

            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/10">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#E8563F"
                    color="#E8563F"
                    size={14}
                    className="mr-0.5"
                  />
                ))}
              </div>
              <p className="text-white text-lg md:text-xl font-bold">1+ Years</p>
              <p className="text-white/80 text-sm md:text-base">Experience</p>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Let&apos;s work together</h3>
                <p className="text-white/80 text-sm md:text-base">Get in touch to discuss your project</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

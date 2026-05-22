import { motion } from "framer-motion";

const films = [
  {
    title: "PPMS",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nEJQz7Abl6crUGaVsmgqiD6P6Nzxke.png",
  },
  {
    title: "Raya",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jnFJbd0rk0sXqiglRTlzkmmUdYtwHl.png",
  },
  {
    title: "Rajkumari",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W121DO7JA8DHdlLUJRZkprYCMlDBsc.png",
  },
  {
    title: "Udaharnarth Nemade",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7jkxgW0CLuWN2OfLLyQT3G3apY4tKC.png",
  },
  {
    title: "Kshatriya",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DDTfRO4PX9PS97AeaMjo9Mc11ar4IV.png",
  },
  {
    title: "Erbai",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bT3u2h5qQdOPHUwILYspG8Sp2DWN7j.png",
  },
  {
    title: "Asahi Prakda Chaat",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SYalzyB7L4SvLdxGCOQCG8LvDzfs6E.png",
  },
  {
    title: "Ek Karachya Bhankarkaa",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KFYLjB6k2JdreyTRVfPJwT8mSqRe8V.png",
  },
];

const WorkShowcase = () => (
  <>
    {/* HERO */}
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="container relative">
        <p className="eyebrow mb-4">▸ Since 2017</p>
        <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight">
          Our <span className="text-primary">Work</span>
        </h1>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs md:text-sm mt-6">
          Featured Films Showcase
        </p>
      </div>
    </section>

    {/* ================= FEATURED FILMS SECTION ================= */}
    <section className="container py-20">
      <div className="text-center mb-16">
        <p className="eyebrow mb-4">▸ Production Portfolio</p>

        <h2 className="display-lg mb-4">
          Featured <span className="text-primary">Films</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Showcase of Marathi cinema projects we have collaborated with for
          dubbing and audio production.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-transparent border border-white/10 rounded-2xl p-4 sm:p-8 md:p-12 backdrop-blur-sm"
      >
        {/* FILM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {films.map((film, i) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative bg-[#0f0f0f] border border-white/10 rounded-xl p-3 sm:p-4 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-[#151515]">
                {/* Poster */}
                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">
                      {film.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </>
);

export default WorkShowcase;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/sections/Footer";
import ameyWagh from "@/assets/gallery/amey-wagh.jpg";
import mangesh from "@/assets/gallery/mangesh-borgaonkar.jpg";
import savanee from "@/assets/gallery/savanee-ravindra.jpg";
import shaunak from "@/assets/gallery/shaunak-avinash.png";
import jyoti from "@/assets/gallery/jyoti-subash.png";
import milind from "@/assets/gallery/milind-gune.png";
import ashutosh from "@/assets/gallery/ashutosh-javdekar.png";
import mahalaxmi from "@/assets/gallery/mahalaxmi-iyer.png";
import uddhav from "@/assets/gallery/uddhav-thakre.jpg";
import shankar from "@/assets/gallery/shankar-mahadevan.jpg";
import subodh from "@/assets/gallery/subodh-bhave.jpg";

const photos = [
  { img: ameyWagh, name: "Amey Wagh", role: "Marathi Film Dubbing" },
  { img: mangesh, name: "Mangesh Borgaonkar", role: "Music Album Dubbing" },
  { img: savanee, name: "Savanee Ravindra", role: "Music Single Dubbing" },
  { img: shaunak, name: "Siddarth Menon", role: "Marathi Film Dubbing"},
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QofqAp1c9YQYVrP0wGdsL29LBuTNi7.png", name: "Pt.Shaunak Abhisheki and Avinash Chandrachood", role: "Marathi Single", },
  { img: jyoti, name: "Jyoti Subash", role: "Dubbing for Film Basta" },
  { img: milind, name: "Milind Gune", role: "Ramkrushna Math, Pune · Music Album" },
  { img: ashutosh, name: "Dr. Ashutosh Javdekar", role: "Veen Music Album" },
  { img: uddhav, name: "Shri. Uddhav Thakre", role: "Khakee Gulab Release" },
  { img: shankar, name: "Shankar Mahadevan", role: "Katyar to Kajarare Promotions Shoot" },
  { img: subodh, name: "Subodh Bhave", role: "Dubbing For Film" },
  { img: mahalaxmi, name: "Mahalaxmi Iyer", role: "Dubbing for Album Tujha Ek Themb" },
];

const films = [
  {
    title: "PPMS",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nEJQz7Abl6crUGaVsmgqiD6P6Nzxke.png",
  },
  {
    title: "Raya",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jnFJbd0rk0sXqiglRTlzkmmUdYtwHl.png",
  },
  {
    title: "Rajkumari",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W121DO7JA8DHdlLUJRZkprYCMlDBsc.png",
  },
  {
    title: "Udaharnarth Nemade",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7jkxgW0CLuWN2OfLLyQT3G3apY4tKC.png",
  },
  {
    title: "Kshatriya",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DDTfRO4PX9PS97AeaMjo9Mc11ar4IV.png",
  },
  {
    title: "Erbai",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bT3u2h5qQdOPHUwILYspG8Sp2DWN7j.png",
  },
  {
    title: "Asahi Prakda Chaat",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SYalzyB7L4SvLdxGCOQCG8LvDzfs6E.png",
  },
  {
    title: "Ek Karachya Bhankarkaa",
    poster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KFYLjB6k2JdreyTRVfPJwT8mSqRe8V.png",
  },
];

const GalleryPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main className="pt-32 pb-24">
      <section className="container">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">▸ Studio Moments</p>
          <h1 className="display-lg mb-4">
            Gallery of <span className="text-primary">Collaborations</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Behind-the-scenes glimpses from our recording sessions with celebrated
            artists, singers and actors who have graced Media Works Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <React.Fragment key={p.name}>
              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden border border-border bg-card aspect-[4/5]"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Always-visible bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* Hover orange wash */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

                <figcaption className="absolute inset-x-0 bottom-0 p-5 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="h-px w-10 bg-primary mb-3 transition-all duration-500 group-hover:w-20" />
                  <h3 className="font-display text-xl uppercase tracking-wide text-foreground leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1.5">
                    {p.role}
                  </p>
                </figcaption>
              </motion.figure>
              {p.img2 && (
                <motion.figure
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 + 0.05 }}
                  className="group relative overflow-hidden border border-border bg-card aspect-[4/5]"
                >
                  <img
                    src={p.img2}
                    alt={`${p.name} - 2`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Always-visible bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  {/* Hover orange wash */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

                  <figcaption className="absolute inset-x-0 bottom-0 p-5 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="h-px w-10 bg-primary mb-3 transition-all duration-500 group-hover:w-20" />
                    <h3 className="font-display text-xl uppercase tracking-wide text-foreground leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1.5">
                      {p.role}
                    </p>
                  </figcaption>
                </motion.figure>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Feature Films Section */}
      <section className="container mt-32">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">▸ Production Portfolio</p>
          <h2 className="display-lg mb-4">
            Featured <span className="text-primary">Films</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of Marathi cinema projects we have collaborated with for dubbing and audio production.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-transparent border border-white/10 rounded-lg p-6 sm:p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {films.map((film, i) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-transparent border border-white/10 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] flex items-center justify-center aspect-[3/4] overflow-hidden">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
    <Footer />
  </div>
);

export default GalleryPage;

import { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";
import w9 from "@/assets/work-9.jpg";
import w10 from "@/assets/work-10.jpg";
import w11 from "@/assets/work-11.jpg";
import w12 from "@/assets/work-12.jpg";
import w13 from "@/assets/work-13.jpg";
import w14 from "@/assets/work-14.jpg";
import w15 from "@/assets/work-15.jpg";
import w16 from "@/assets/work-16.jpg";
import w17 from "@/assets/work-17.jpg";

type Cat = "All" | "Feature Films" | "Short Films" | "Podcasts" | "Music" | "Corporate";

interface Project {
  title: string;
  category: Exclude<Cat, "All">;
  img: string;
  span: string;
  desc: string;
}

const imgs = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17];
const pick = (i: number) => imgs[i % imgs.length];

const rawProjects: Omit<Project, "img" | "span">[] = [
  { title: "Bhairav", category: "Feature Films", desc: "Historical drama presented by Swami Samarth Movies and Everest Entertainment." },
  { title: "Priyatama", category: "Feature Films", desc: "Shubh Vivah wedding drama film production." },
  { title: "Dr. Kanashthey Bhankar", category: "Feature Films", desc: "Multi-cast drama exploring family dynamics and personal growth." },
  { title: "Rajkumar", category: "Feature Films", desc: "Period family drama with profound storytelling and cinematography." },
  { title: "Suraksha Ek Kodi", category: "Feature Films", desc: "Thriller drama presented by Sanvi Productions." },
  { title: "Raan", category: "Feature Films", desc: "Dark psychological thriller by director Rakesh Sharma for Kahaani Company." },
  { title: "Jawani Jhijlod", category: "Feature Films", desc: "Romantic drama directed by Shiv Kadam, presenting raw emotions." },
  { title: "Lolubagchi Rajni", category: "Feature Films", desc: "Comedy film featuring upside-down storytelling and unique humor." },
  { title: "Dilemma", category: "Short Films", desc: "Official Selection — Horror Bowl Movie Awards 2021. Production and post-production." },
  { title: "The Drainage", category: "Short Films", desc: "Award-winning short film — production and post-production." },
  { title: "Weekend", category: "Short Films", desc: "Short film production and post-production." },
  { title: "Vashat — The Cannibal", category: "Short Films", desc: "Short film post-production." },
  { title: "+91 Podcast", category: "Podcasts", desc: "Full podcast production available on Snovel's web portal." },
  { title: "Charging Point", category: "Podcasts", desc: "Podcast production and audio engineering. Available on Snovel." },
  { title: "Screen Time", category: "Podcasts", desc: "Podcast production and distribution. Available on Snovel." },
  { title: "Khakee Gulab: Ek Rasrang", category: "Music", desc: "Full music album production and recording." },
  { title: "Khakee Gulab: Ek Bhakti Sugandh", category: "Music", desc: "Devotional music album — production and recording." },
  { title: "Tujha Ek Themb", category: "Music", desc: "Music album featuring dubbing by Mahalaxmi Iyer." },
  { title: "Srimad Bhagavatgeeta", category: "Music", desc: "Sacred music album — full production." },
  { title: "Maharashtra Tourism", category: "Corporate", desc: "Corporate film production for Maharashtra Tourism Department Board." },
  { title: "Symbiosis SSOU", category: "Corporate", desc: "Corporate and documentary film for Symbiosis Skills & Open University, Pune." },
  { title: "Finolex Pipes", category: "Corporate", desc: "Corporate brand film production." },
  { title: "Dilemma", category: "Short Films", desc: "Dark thriller — Official Selection at Horror Bowl Movie Awards 2021. Multiple festival selections including London Indie Short Festival and Berlin Shorts Award." },
  { title: "Vasaad: The Cannibal", category: "Short Films", desc: "Atmospheric thriller by Yogesh Baban Gadage, exploring dark psychological themes with stunning cinematography." },
  { title: "Architecture & Design", category: "Corporate", desc: "Architectural documentation and corporate building photography for institutional clients." },
  { title: "Weekend", category: "Short Films", desc: "Short film by Arvind Gajanan Joshi featuring ensemble cast drama with nuanced storytelling." },
  { title: "Paus Uda 2024", category: "Feature Films", desc: "Marathi film production featuring autumn themes and contemporary storytelling." },
  { title: "Shrimad Bhagavad Gita (Marathi) Vol. 2", category: "Music", desc: "Sacred music production featuring artists Shirish Dinkar Joshi and Anand Dinkar Joshi." },
  { title: "Gateway of India Photography", category: "Corporate", desc: "Professional location photography and cinematography for tourism and architectural documentation." },
];

const projects: Project[] = rawProjects.map((p, i) => ({
  ...p,
  img: pick(i),
  span: i % 5 === 0 ? "row-span-2" : "",
}));

const filters: Cat[] = ["All", "Feature Films", "Short Films", "Podcasts", "Music", "Corporate"];

const Portfolio = memo(() => {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);
  const handleOpen = useCallback((p: Project) => setOpen(p), []);
  const handleClose = useCallback(() => setOpen(null), []);

  return (
    <section id="work" className="relative py-20 md:py-32 bg-black">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-background pointer-events-none" />
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-8 font-medium">
              ▸ Selected Work
            </p>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              THE <span className="text-primary">REEL.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.25em] border transition-all ${
                  active === f
                    ? "bg-primary text-black border-primary"
                    : "border-white/20 text-white hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] md:auto-rows-[280px] gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.button
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.15) }}
                onClick={() => handleOpen(p)}
                className={`group relative overflow-hidden text-left ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 border border-transparent group-hover:border-primary transition-colors" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide">
                    {p.title}
                  </h3>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/0 border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary group-hover:border-primary transition-all">
                  <Play size={14} className="text-primary-foreground ml-0.5" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-card border border-border rounded-sm overflow-hidden"
            >
              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Close project details"
              >
                <X />
              </button>
              <div className="aspect-video relative bg-background-elevated overflow-hidden">
                <img src={open.img} alt={open.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play size={28} className="text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{open.category}</span>
                <h3 className="font-display text-3xl uppercase tracking-wide mt-2 mb-4">{open.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{open.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;

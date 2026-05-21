import { memo } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "AppDirect",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jtQyYy87pevG7tny4mjHWSqtiTL2EX.png",
  },
  {
    name: "FinOlex Pipes",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lCknjauIszgjMVCRbwpzowo0YANGlQ.png",
  },
  {
    name: "Rhyfil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B8HFCGTzYLk6fz6bTZHUyf0sewuX9T.png",
  },
  {
    name: "Symbiosis International University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rLktMDT5dOvqThWqCMw5rpsyMkSOwe.png",
  },
  {
    name: "Maharashtra Shasan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-15CBI9ldBNNdQRyEmsC264fMj8a1Kz.png",
  },
  {
    name: "Maharashtra Tourism",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GoQL3WgC21oFStbcq2LrSYMUgfpv1Y.png",
  },
  {
    name: "Nashik Municipal Corporation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QQMLgmPw0058wE7otqxqXzqbqtUyt8.png",
  },
  {
    name: "Teradata",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2YW795FMyO0FS55mNDB2oLJvV2Ig1p.png",
  },
  {
    name: "Planet Marathi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a1YKFFSJOxJLY2Pv48TwPRBSwSZrTY.png",
  },
  {
    name: "Symbiosis SSOU",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KPdb3OMaa8gciRWEbVqejh8hPt6xhn.png",
  },
  {
    name: "Election Commission",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xTifiS5UlDKR1WDQ4ZYJK2GnFCKSRz.png",
  },
  {
    name: "Audible",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fBRJJnfhUh5KcnkoISeHuZuqYM7Mh8.png",
  },
  {
    name: "Zee Music Co. Marathi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gGXcYNQMUpVGXgtvE10bI54DBM2Dlq.png",
  },
];

const Clients = memo(() => {
  return (
    <section className="relative py-16 md:py-20 bg-black">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-black to-black pointer-events-none" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-8 font-medium">
            ▸ Trusted By Industry Leaders
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            Proudly partnering with top brands, studios, and organizations across India and beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-transparent border border-white/10 rounded-lg p-6 sm:p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-transparent border border-white/10 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain px-2 sm:px-3"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-4">
            And many more prestigious brands
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary text-xs">★</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Clients.displayName = "Clients";
export default Clients;

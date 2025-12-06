"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Zap, Activity, GitBranch, Github, Youtube, Instagram } from "lucide-react";
import Image from "next/image";

const XIcon = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    style={{ padding: '1px' }}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Hero({ data }) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full"
          >
            <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
                <Image
                  src="/me.jpeg"
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700">
                  <Terminal size={12} />
                  <span>Full-Stack Developer</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight mb-2">
                  {data.name}
                </h1>

                <a
                  href="https://socialcounts.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Founder @ SocialCounts.org
                </a>

                <div className="flex gap-4">
                  {data.socials.twitter && (
                    <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors" aria-label="Visit X (Twitter) profile">
                      <XIcon size={18} />
                    </a>
                  )}
                  {data.socials.youtube && (
                    <a href={data.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-red-600 transition-colors" aria-label="Visit YouTube channel">
                      <Youtube size={20} />
                    </a>
                  )}
                  {data.socials.github && (
                    <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors" aria-label="Visit GitHub profile">
                      <Github size={20} />
                    </a>
                  )}
                  {data.socials.instagram && (
                    <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-500 transition-colors" aria-label="Visit Instagram profile">
                      <Instagram size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              <p className="mb-4">
                Self-taught developer mastering <span className="font-semibold text-zinc-900 dark:text-zinc-50">high-scale backend systems</span> and infrastructure. Since 2020, I've built real-world products from scratch, focusing on performance, efficiency, and automated DevOps.
              </p>
              <p>
                Founder of <span className="font-semibold text-zinc-900 dark:text-zinc-50">SocialCounts.org</span> — a live analytics platform serving 10k+ daily users. I specialize in MongoDB optimization, Redis caching, and containerized deployments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Cpu size={16} />, text: "Backend Systems" },
                { icon: <Zap size={16} />, text: "High Performance" },
                { icon: <Activity size={16} />, text: "Real-time Analytics" },
                { icon: <GitBranch size={16} />, text: "DevOps & CI/CD" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-5/12 lg:w-4/12 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 dark:opacity-30"></div>
            <div className="relative bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-zinc-500 font-mono">monirul@server:~</div>
              </div>

              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="text-zinc-400">neofetch</span>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-6 text-zinc-300 items-start">
                  <div className="text-purple-500 font-bold text-xs leading-relaxed whitespace-pre select-none">
                    {` __  __
|  \\/  |
| \\  / |
|_|\\/|_|`}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div><span className="text-blue-400 font-bold">OS</span>: Linux (Ubuntu/Debian)</div>
                    <div><span className="text-blue-400 font-bold">Uptime</span>: 5 years</div>
                    <div><span className="text-blue-400 font-bold">Role</span>: Full-Stack Developer</div>
                    <div><span className="text-blue-400 font-bold">Project</span>: SocialCounts.org</div>
                    <div><span className="text-blue-400 font-bold">Stack</span>: Next.js, Node, Mongo, Docker</div>
                    <div><span className="text-blue-400 font-bold">Focus</span>: Scaling, Perf, Auto</div>
                  </div>
                </div>

                <div>
                  <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="text-zinc-400">./current_status.sh</span>
                  <div className="mt-2 p-3 bg-zinc-950 rounded border border-zinc-800 text-xs">
                    <div className="flex justify-between mb-1">
                      <span>Traffic</span>
                      <span className="text-green-400">10k+ Daily Users</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Server Cost</span>
                      <span className="text-green-400">~$150/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue</span>
                      <span className="text-green-400">~$1,500/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
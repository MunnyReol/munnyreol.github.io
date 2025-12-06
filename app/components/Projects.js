"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, BarChart2, Globe, Instagram, Youtube, Facebook, AtSign, Music2 } from "lucide-react";

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Projects({ projects }) {
  const project = projects[0];

  if (!project) return null;

  const platformLinks = [
    {
      name: "X",
      icon: <XIcon />,
      googleUrl: "https://www.google.com/search?q=site:x.com+socialcounts.org&udm=2&source=lnt&tbs=qdr:w",
      directUrl: "https://x.com/search?q=socialcounts.org&src=recent_search_click&f=live",
      priority: true
    },
    {
      name: "Instagram",
      icon: <Instagram size={16} />,
      googleUrl: "https://www.google.com/search?q=site:instagram.com+socialcounts.org&udm=2&source=lnt&tbs=qdr:w",
      directUrl: "https://www.instagram.com/explore/tags/socialcounts/",
      priority: true
    },
    {
      name: "YouTube",
      icon: <Youtube size={16} />,
      googleUrl: "https://www.google.com/search?q=site:youtube.com+socialcounts.org&udm=2&source=lnt&tbs=qdr:w",
      directUrl: "https://www.youtube.com/results?search_query=socialcounts.org&sp=CAI%253D",
      priority: true
    },
    {
      name: "TikTok",
      icon: <Music2 size={16} />,
      googleUrl: "https://www.google.com/search?q=site:tiktok.com+socialcounts.org&udm=2&source=lnt&tbs=qdr:w",
      directUrl: "https://www.tiktok.com/search?q=socialcounts.org",
      priority: false
    },
    {
      name: "Threads",
      icon: <AtSign size={16} />,
      googleUrl: "https://www.google.com/search?q=site:threads.com+socialcounts.org&udm=2&source=lnt&tbs=qdr:w",
      directUrl: "https://www.threads.net/search?q=socialcounts.org&serp_type=default&filter=recent",
      priority: false
    },
    {
      name: "Facebook",
      icon: <Facebook size={16} />,
      googleUrl: "https://www.google.com/search?q=site:facebook.com+socialcounts.org&udm=2&source=lnt&tbs=qdr:w",
      directUrl: "https://www.facebook.com/search/posts/?q=socialcounts.org",
      priority: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-sm font-medium text-red-500 uppercase tracking-wider">
                  Live Platform
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                {project.title}
              </h2>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold rounded-full transition-colors"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 font-semibold rounded-full transition-colors"
                  >
                    Follow on X <ArrowRight size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden flex items-center justify-center order-1 lg:order-2 p-8">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
              <div className="relative w-full max-w-sm aspect-video bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-20 h-4 bg-white/20 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-2 bg-white/10 rounded-full"></div>
                  <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="text-4xl font-bold text-white">10k+</div>
                  <BarChart2 className="text-white/50" size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  See What People Are Saying
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Discover mentions across social platforms
                </p>
              </div>
              <a
                href="https://www.google.com/search?q=%22socialcounts.org%22%20-socialcounts.org&udm=2&source=lnt&tbs=qdr:w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 flex items-center gap-1 transition-colors"
              >
                <Globe size={14} />
                <span>Web Search</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {platformLinks.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="text-zinc-600 dark:text-zinc-400 shrink-0">
                      {platform.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {platform.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <a
                      href={platform.googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-zinc-700/50 rounded-md transition-colors whitespace-nowrap"
                      title="Google Search (Last 7 Days)"
                    >
                      Google
                    </a>
                    <a
                      href={platform.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 bg-zinc-200 dark:bg-zinc-700 rounded-md transition-colors font-medium whitespace-nowrap"
                      title="Direct Platform Search"
                    >
                      Direct
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center leading-relaxed">
              Google search shows last 7 days. Direct links show real-time results. Google's index may not capture every mention instantly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
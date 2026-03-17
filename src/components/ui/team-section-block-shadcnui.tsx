"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion"
import {
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react"
import { useState } from "react"

const teamMembers = [
  {
    name: "Raman Makkar",
    role: "Founder & CEO",
    bio: "Founded Codazz and TML Branding Agency. Over a decade in software engineering, product development, and digital transformation.",
    initials: "RM",
    location: "New York & Dubai",
    skills: ["Strategy", "Product", "Engineering"],
    gradient: "from-gray-800/10 via-gray-800/5 to-transparent",
    social: {
      linkedin: "#",
      email: "raman@codazz.com",
    },
  },
  {
    name: "Harry",
    role: "VP Engineering",
    bio: "Leads engineering across all 46 locations. Expert in scalable cloud architecture, microservices, and high-performance distributed teams.",
    initials: "HM",
    location: "San Francisco",
    skills: ["Cloud", "Architecture", "DevOps"],
    gradient: "from-gray-600/10 via-gray-600/5 to-transparent",
    social: {
      linkedin: "#",
      email: "harry@codazz.com",
    },
  },
  {
    name: "Michel",
    role: "Chief Design Officer",
    bio: "Drives product design and brand identity across all client engagements. Specializes in design systems, user research, and conversion-focused UX.",
    initials: "MC",
    location: "London",
    skills: ["UI/UX", "Branding", "Design Systems"],
    gradient: "from-gray-700/10 via-gray-700/5 to-transparent",
    social: {
      linkedin: "#",
      email: "michel@codazz.com",
    },
  },
  {
    name: "Karan",
    role: "Head of Operations",
    bio: "Manages global operations and client delivery across 24 countries. Ensures every project runs on time, on budget, and to standard.",
    initials: "KS",
    location: "Dubai",
    skills: ["Operations", "Delivery", "Global Teams"],
    gradient: "from-gray-600/10 via-gray-600/5 to-transparent",
    social: {
      linkedin: "#",
      email: "karan@codazz.com",
    },
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
}

function TeamMemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const shouldReduceMotion = useReducedMotion()

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = (e.clientX - rect.left - width / 2) / (width / 2)
    const y = (e.clientY - rect.top - height / 2) / (height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div variants={itemVariants} style={{ perspective: 1000 }}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative"
      >
        <Card className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white backdrop-blur-xl transition-shadow duration-500 hover:shadow-xl hover:shadow-gray-800/5">
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            animate={
              isHovered
                ? { opacity: 1 }
                : { opacity: shouldReduceMotion ? 0.05 : 0 }
            }
          />

          {/* Sparkle effect on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 }
            }
            className="absolute right-4 top-4 z-10"
          >
            <Sparkles className="h-5 w-5 text-gray-800" aria-hidden />
          </motion.div>

          <div className="relative z-10 p-8">
            {/* Avatar Section */}
            <div className="mb-5 flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, rgba(17,24,39,0.2), rgba(17,24,39,0))`,
                  }}
                  animate={
                    isHovered
                      ? {
                          rotate: shouldReduceMotion ? 0 : 360,
                          scale: shouldReduceMotion ? 1 : [1, 1.08, 1],
                        }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.6 : 3,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-white">
                  <span className="text-3xl font-bold text-gray-900">{member.initials}</span>
                </div>
              </motion.div>
            </div>

            {/* Info Section */}
            <div className="text-center">
              <motion.h3
                className="mb-1 text-xl font-semibold tracking-tight text-gray-900"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              <Badge
                variant="secondary"
                className="mb-3 border-gray-200 bg-gray-100 text-xs uppercase tracking-widest text-gray-900"
              >
                {member.role}
              </Badge>

              <motion.div
                className="mb-3 flex items-center justify-center gap-1 text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="h-3 w-3" aria-hidden />
                <span>{member.location}</span>
              </motion.div>

              <p className="mb-5 text-sm leading-relaxed text-gray-500">
                {member.bio}
              </p>

              {/* Skills */}
              <motion.div
                className="mb-5 flex flex-wrap justify-center gap-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                {member.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * idx, type: "spring" }}
                  >
                    <Badge
                      variant="outline"
                      className="border-gray-200 bg-gray-50 text-xs text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-100"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Mail, label: "Email" },
                ].map((social, idx) => (
                  <motion.div
                    key={social.label}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isHovered
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0.85, rotate: 0 }
                    }
                    transition={{
                      delay: isHovered ? 0.1 * idx : 0,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-gray-200 bg-white text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <social.icon className="h-4 w-4" aria-hidden />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export function TeamSectionBlock() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="team-section-heading"
      className="relative w-full overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.18, 1],
            rotate: shouldReduceMotion ? 0 : [0, 90, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gray-600/15 blur-[180px]"
        />
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1.1, 1, 1.1],
            rotate: shouldReduceMotion ? 0 : [0, -90, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 16,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gray-500/10 blur-[180px]"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

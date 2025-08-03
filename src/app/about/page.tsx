'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiTarget, FiHeart, FiGlobe } from 'react-icons/fi';
import Footer from '../../components/Footer';
import office from '../../components/assets/images/office.jpg';
import officeguy from '../../components/assets/images/officeguy.jpg';
import officelady from '../../components/assets/images/officelady.jpg';
import ugo from '../../components/assets/images/ugo.jpg';
import officeguy2 from '../../components/assets/images/officeguy2.jpg';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: officeguy,
    description: 'Visionary leader with 15+ years in tech entrepreneurship'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: officelady,
    description: 'Technology expert specializing in scalable solutions'
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Design',
    image: ugo,
    description: 'Creative director with an eye for stunning user experiences'
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director',
    image: officeguy2,
    description: 'Digital marketing strategist and brand builder'
  }
];

const stats = [
  { value: '50+', label: 'Projects Completed', icon: <FiAward className="w-8 h-8" /> },
  { value: '100%', label: 'Client Satisfaction', icon: <FiHeart className="w-8 h-8" /> },
  { value: '15+', label: 'Years Experience', icon: <FiTarget className="w-8 h-8" /> },
  { value: 'Global', label: 'Reach', icon: <FiGlobe className="w-8 h-8" /> }
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace change and constantly seek new ways to improve and innovate in everything we do.'
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality solutions that exceed expectations.'
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and building strong relationships with our clients.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden px-16">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 py-1 text-4xl font-medium bg-gold-500/10 text-gold-400 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-[#ffd700] bg-gradient-to-r from-gold-400 to-gold-600">
              Building the Future, One Innovation at a Time
            </h1>
            <p className="text-xl text-gray-300">
              We are a passionate team of innovators, creators, and problem-solvers dedicated to delivering exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2022, Bubble Barrel began as a solo developer with a vision to transform ideas into digital reality. 
                  What started as a humble startup has grown into a leading digital solutions provider, serving clients worldwide.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of working with startups, established businesses, and Fortune 500 companies, helping them navigate 
                  the digital landscape and achieve their business objectives through innovative technology solutions.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence. We take pride in our ability to stay 
                  ahead of industry trends and deliver cutting-edge solutions that drive real business results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-2xl -rotate-3"></div>
              <div className="absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden rotate-3">
                <Image
                  src={office}
                  alt="Our Office"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black px-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300">
              These principles guide everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 mb-4">
                  <FiAward className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-500 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black px-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300">
              The brilliant minds behind our success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h4 className="text-xl font-bold">{member.name}</h4>
                      <p className="text-gold-400 mb-2">{member.role}</p>
                      <p className="text-sm text-gray-300">{member.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-gold-500/10 to-gold-500/5 p-12 rounded-2xl border border-gold-500/20"
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s work together to bring your ideas to life with our expert team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-[#ffd700] font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
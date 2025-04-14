
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Building, CheckCircle, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-purple-dark text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">We're On A Mission To Redefine Your Shopping Experience</h1>
                <p className="text-gray-200 mb-8 text-lg">
                  Founded in 2015, Purplify has grown from a small startup to a trusted name in the electronics industry. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-gradient" size="lg">
                    View Our Products
                  </Button>
                  <Button variant="outline" className="bg-white text-purple-dark border-white hover:bg-white/90" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format" 
                  alt="Team working together"
                  className="rounded-xl shadow-lg w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg">
                The journey that led to what Purplify is today - a story of passion, 
                resilience, and commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format" 
                  alt="Team working together"
                  className="rounded-xl shadow-lg" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-dark">From Garage to Global</h3>
                <p className="text-gray-600 mb-6">
                  Purplify began in 2015 in a small garage with just three people and a vision to create 
                  electronics that would truly enhance people's lives. Our founders, all tech enthusiasts 
                  with backgrounds in engineering, wanted to build products that were not only technologically 
                  advanced but also accessible and user-friendly.
                </p>
                <p className="text-gray-600 mb-6">
                  Within five years, we expanded from our humble beginnings to a team of over 200 passionate 
                  individuals across three continents. Today, we pride ourselves on maintaining the same 
                  enthusiasm and customer-focused approach that drove us from day one.
                </p>
                <div className="flex gap-8 mt-8">
                  <div>
                    <p className="text-4xl font-bold text-purple-default mb-1">200+</p>
                    <p className="text-gray-500">Team Members</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-purple-default mb-1">50+</p>
                    <p className="text-gray-500">Countries</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-purple-default mb-1">1M+</p>
                    <p className="text-gray-500">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-600 text-lg">
                These principles guide our decisions, shape our culture, and help us deliver 
                exceptional products and experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="bg-purple-light/20 p-4 rounded-full inline-block mb-6">
                  <Award className="text-purple-default w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-dark">Quality Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering products that exceed expectations in 
                  performance, durability, and user experience. Each product undergoes 
                  rigorous testing before reaching our customers.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="bg-purple-light/20 p-4 rounded-full inline-block mb-6">
                  <Heart className="text-purple-default w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-dark">Customer First</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen to 
                  feedback, anticipate needs, and consistently strive to improve the 
                  customer journey from browsing to after-sales support.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="bg-purple-light/20 p-4 rounded-full inline-block mb-6">
                  <CheckCircle className="text-purple-default w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-dark">Innovation</h3>
                <p className="text-gray-600">
                  We foster a culture of creativity and forward-thinking. By staying 
                  ahead of industry trends and embracing new technologies, we develop 
                  products that are both innovative and relevant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership</h2>
              <p className="text-gray-600 text-lg">
                The talented individuals who drive our vision forward and inspire our team to excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 relative group overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format" 
                    alt="Alex Johnson - CEO" 
                    className="w-full aspect-1 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-dark mb-1">Alex Johnson</h3>
                <p className="text-gray-500">Chief Executive Officer</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 relative group overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=1974&auto=format" 
                    alt="Sarah Chen - CTO" 
                    className="w-full aspect-1 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-dark mb-1">Sarah Chen</h3>
                <p className="text-gray-500">Chief Technology Officer</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 relative group overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format" 
                    alt="Michael Patel - COO" 
                    className="w-full aspect-1 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-dark mb-1">Michael Patel</h3>
                <p className="text-gray-500">Chief Operations Officer</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 relative group overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format" 
                    alt="David Kim - CMO" 
                    className="w-full aspect-1 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-purple-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-dark mb-1">David Kim</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partners</h2>
              <p className="text-gray-600 text-lg">
                We collaborate with industry leaders to deliver the best solutions to our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {/* Partner logos - using placeholder colored rectangles */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500 font-medium">Partner 1</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500 font-medium">Partner 2</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500 font-medium">Partner 3</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500 font-medium">Partner 4</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500 font-medium">Partner 5</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500 font-medium">Partner 6</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-purple-gradient text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Purplify?</h2>
              <p className="text-xl mb-8">
                Explore our innovative products and find the perfect tech solution for your needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-dark hover:bg-white/90"
                  asChild
                >
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

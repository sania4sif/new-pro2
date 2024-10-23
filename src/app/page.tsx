'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import TestiMonialCard from '@/components/TestimonialCard'
import WhyChooseUs from '@/components/WhyChooseUs'


import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
       <WhyChooseUs/>
       <FeaturedCourses/>
       <TestiMonialCard/>
       <FeaturedWebinars/>
      
    </div>
  )
}

export default page

import React from 'react'
import {HoverEffect} from "./ui/card-hover-effect"
export const projects = [
    {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
    ]



const FeaturedWebinars = () => {
  return (
    <div className="max-w-5xl bg-black mx-auto px-8" >
     <HoverEffect items={projects}/>
    </div>
  )
}

export default FeaturedWebinars
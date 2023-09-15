import { dataCarouselHero } from "@/data";
export const metadata = {
  title: "GOTRAVPAPUA | Tour Event",
  openGraph: {
    title: "GOTRAVPAPUA | Tour Event",
    description:
      "Join Our Exciting Tour Events for Unforgettable Travel Experiences. Discover, Explore, and Make Memories!",
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: "GOTRAVPAPUA",
    images: [
      {
        url: process.env.NEXT_PUBLIC_HOST + dataCarouselHero[2].imageUrl,
        width: 800,
        height: 600,
      },
      {
        url: process.env.NEXT_PUBLIC_HOST + dataCarouselHero[2].imageUrl,
        width: 1800,
        height: 1600,
      },
      {
        url: process.env.NEXT_PUBLIC_HOST + dataCarouselHero[2].imageUrl,
        width: 1080,
        height: 675,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "GOTRAVPAPUA | Tour Events",
    description:
      "Join Our Exciting Tour Events for Unforgettable Travel Experiences. Discover, Explore, and Make Memories!",
    images: [process.env.NEXT_PUBLIC_HOST + dataCarouselHero[2].imageUrl],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: [
        "aadmin@gotravpapua.com",
        process.env.NEXT_PUBLIC_HOSTNAME + "tour-events",
      ],
    },
  },
};

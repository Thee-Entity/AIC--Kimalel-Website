
import { type LucideIcon, Users, Music, HeartHandshake, Baby, Globe, BookOpen, Handshake, HandHeart, Sparkles, TrendingUp } from "lucide-react";

export const featuredSermon = {
  title: "The Power of Forgiveness",
  speaker: "Rev. John Doe",
  date: "October 29, 2023",
  summary: "Explore the transformative power of forgiveness as taught in the scriptures and learn how to apply it in your daily life for spiritual freedom and healing.",
  transcript: `
    "Good morning, beloved. Today, we gather to reflect on a cornerstone of our faith, a principle so profound yet often so challenging: the power of forgiveness.
    In the book of Matthew, chapter 6, verse 14, Jesus tells us, 'For if you forgive other people when they sin against you, your heavenly Father will also forgive you.' This is not merely a suggestion; it is a divine instruction that holds the key to our spiritual well-being.
    What does it truly mean to forgive? It is not about condoning the wrong that was done to us. It is not about forgetting the pain. Forgiveness is an act of the will, a choice to release the burden of bitterness and resentment from our hearts. It is choosing to hand over justice to God, who is the only perfect judge.
    Think about a time someone wronged you. The anger, the hurt... it can feel like a heavy chain. Holding onto that unforgiveness doesn't punish the other person; it keeps us imprisoned. Forgiveness is the key that unlocks our own chains.
    Peter asked Jesus, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times.' This illustrates that forgiveness is not a one-time event but a continuous attitude, a way of life.
    When we forgive, we mirror the grace that has been shown to us. Colossians 3:13 says, 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' We have been forgiven an immeasurable debt by our Father in heaven through the sacrifice of His Son. How can we then withhold forgiveness from others for the comparatively small offenses against us?
    The journey of forgiveness begins with a prayer. Ask God to soften your heart. Ask for the strength to let go. It may not be easy, and it may not happen overnight, but with each step, you will find a new sense of peace and freedom. You will find healing. You will find yourself drawn closer to the heart of God.
    Let us pray. Heavenly Father, teach us to forgive as you have forgiven us. Release us from the chains of bitterness and fill our hearts with Your peace and Your love. Amen."
  `,
  imageId: "sermon-thumbnail",
};

export const upcomingEvents = [
  {
    date: new Date(2024, 10, 12),
    title: "Youth Worship Night",
    description: "A special night of worship, prayer, and fellowship for our youth. All are welcome!",
    imageId: "event-1",
    organizer: "Youth Ministry"
  },
  {
    date: new Date(2024, 10, 18),
    title: "Community Food Drive",
    description: "Join us as we partner with local organizations to collect food for families in need.",
    imageId: "event-2",
    organizer: "Outreach Team"
  },
  {
    date: new Date(2024, 11, 3),
    title: "Annual Christmas Cantata",
    description: "Celebrate the season with beautiful music from our choir and orchestra.",
    imageId: "event-3",
    organizer: "Choir & Worship Team"
  },
  {
    date: new Date(2025, 0, 7),
    title: "New Year Prayer Breakfast",
    description: "Start the new year right with a time of prayer, reflection, and community breakfast.",
    imageId: "event-1",
    organizer: "Church Leadership"
  },
];

type Ministry = {
    name: string;
    description: string;
    icon: LucideIcon;
    imageId: string;
    href: string;
};

export const ministries: Ministry[] = [
    {
        name: "Men’s Fellowship (AIC CBF)",
        description: "Supporting and equipping men to be Christ-centered leaders in the home, church, and community.",
        icon: Users,
        imageId: "ministry-men",
        href: "/ministries/mens-fellowship",
    },
    {
        name: "Women’s Fellowship (AIC Women’s Guild)",
        description: "Empowering women through prayer, fellowship, and service.",
        icon: HeartHandshake,
        imageId: "ministry-women",
        href: "/ministries/womens-fellowship",
    },
    {
        name: "Youth Fellowship (AIC Youth)",
        description: "Building a vibrant generation of young believers rooted in faith and service.",
        icon: Users,
        imageId: "ministry-youth",
        href: "#", // Replace with actual link
    },
    {
        name: "Choir & Worship Team",
        description: "Leading the congregation in praise and worship through music and song.",
        icon: Music,
        imageId: "ministry-choir",
        href: "#", // Replace with actual link
    },
    {
        name: "Sunday School / Children’s Ministry",
        description: "Teaching God’s Word to children in an engaging, fun, and age-appropriate way.",
        icon: Baby,
        imageId: "ministry-children",
        href: "#", // Replace with actual link
    },
    {
        name: "Outreach & Evangelism",
        description: "Spreading the Gospel and serving the community through outreach programs and missions.",
        icon: Globe,
        imageId: "ministry-outreach",
        href: "#", // Replace with actual link
    },
];


export const testimonies = [
    {
      name: "Lilian Rop",
      quote: "This church has been my rock. The community here is a true family, and I've grown so much in my faith.",
      imageId: "testimony-1",
    },
    {
      name: "Brian Choge",
      quote: "Serving as the Youth Chairperson at AIC Kimalel was a profound experience. The church provided a nurturing environment for leadership and spiritual growth, shaping me in countless ways.",
      imageId: "testimony-2",
    },
    {
      name: "Tabitha Jepchumba",
      quote: "The youth ministry has been amazing for my kids. They love coming to church and are building a strong foundation in Christ.",
      imageId: "testimony-3",
    },
    {
      name: "Samuel Kimani",
      quote: "I was welcomed with open arms from my very first visit. This is a place where you can truly belong.",
      imageId: "testimony-1",
    },
];

export const leadership = [
    {
        name: "Rev. Dr. Elias Ng'etich",
        role: "Leader",
        bio: "Rev. Dr. Elias Ng'etich serves as the senior leader of AIC Kimalel Saramek Church, guiding the congregation in faith and spiritual growth.",
        imageId: "leader-1",
    },
    {
        name: "Pst. Maureen Kosgei",
        role: "Pastor",
        bio: "Passionate about discipleship and community, Pastor Maureen leads ministries with a focus on nurturing faith and empowering families.",
        imageId: "leader-2",
    },
    {
        name: "Pst. Jophet Lagat",
        role: "Pastor",
        bio: "Pastor Jophet Lagat is dedicated to teaching God’s Word and supporting the church family in living Christ-centered lives.",
        imageId: "leader-3",
    },
    {
        name: "Ev. Bureti Philemon",
        role: "Evangelist",
        bio: "Evangelist Bureti is committed to spreading the Gospel and leading our outreach efforts in the community.",
        imageId: "leader-4",
    }
];

export const coreValues = [
    {
        title: "Faith",
        description: "Rooted in God’s Word.",
        icon: BookOpen,
    },
    {
        title: "Community",
        description: "Building relationships through love.",
        icon: Handshake,
    },
    {
        title: "Service",
        description: "Giving back to society.",
        icon: HandHeart,
    },
    {
        title: "Integrity",
        description: "Living by Biblical principles.",
        icon: Sparkles,
    },
    {
        title: "Growth",
        description: "Developing spiritually and holistically.",
        icon: TrendingUp,
    },
];

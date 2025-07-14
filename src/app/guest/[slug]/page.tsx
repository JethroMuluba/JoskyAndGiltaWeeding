import React from 'react'
import data from '@/data/data.json';
import BlogPostClient from './BlogPostClient';  

// Données simulées pour les articles de blog
const blogPosts = [
  {
    id: "0",
    guestName: "Mr Jethro Muluba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284355/Weeding%20Ya%20Djo/Card/Bottom_guest_Mr_Jethro_Muluba_blbl7s.png",
    guestTable: "Patience"
  },

  {
    id: "1",
    guestName: "Couple Nguz",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752451938/Weeding%20Ya%20Djo/Card/Table%20Mormon/Bottom_guestCouple_Nguz_e7ofns.png",
    guestTable: "Mormon"
  },

  {
    id: "2",
    guestName: "Couple Tshimanga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752451934/Weeding%20Ya%20Djo/Card/Table%20Mormon/Bottom_guestCouple_Tshim_d3ud63.png",
    guestTable: "Mormon"
  },

  {
    id: "3",
    guestName: "Couple Juif Noir",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752451933/Weeding%20Ya%20Djo/Card/Table%20Mormon/Bottom_guestCouple_Juif__moim8c.png",
    guestTable: "Mormon"
  },

  {
    id: "4",
    guestName: "Couple Millard",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752451933/Weeding%20Ya%20Djo/Card/Table%20Mormon/Bottom_guestCouple_Milla_icb7yt.png",
    guestTable: "Mormon"
  },

  {
    id: "5",
    guestName: "Couple Kubangila",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752451940/Weeding%20Ya%20Djo/Card/Table%20Mormon/Bottom_guestKubangila_hxlkv4.png",
    guestTable: "Mormon"
  },

  {
    id: "6",
    guestName: "Baseron (8 Personnes) ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752452559/Weeding%20Ya%20Djo/Card/Table%20Baseron/Bottom_guestBaseron_bka7dq.png",
    guestTable: "Baseron"
  },

  {
    id: "7",
    guestName: "Maman Tshiely",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752452559/Weeding%20Ya%20Djo/Card/Table%20Baseron/Bottom_guestMaman_Tshiel_p9iptm.png",
    guestTable: "Baseron"
  },
]

// Données simulées pour les articles connexes


interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const resolvedParams = await params;  
  // Trouver l'article correspondant à l'ID
  const post = blogPosts.find((post) => post.id === resolvedParams.slug) || blogPosts[0];
  const getTemplate01 = data.home?.[0]?.heroSection?.[0]?.cover || "/placeholder.svg";
  const getTemplate02 = data.home?.[0]?.heroSection?.[0]?.cover1 || "/placeholder.svg";

  return <BlogPostClient 
    post={post} 
    getTemplate01={getTemplate01}
    getTemplate02={getTemplate02}
  />
}

export default BlogPostPage

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id
  }))
}
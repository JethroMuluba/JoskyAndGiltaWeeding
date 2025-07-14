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

  {
    id: "8",
    guestName: "Baseron (7 Personnes) ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guestBaseron_7_ni9qzx.png",
    guestTable: "Baserons"
  },

  {
    id: "9",
    guestName: "Miss Karl",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Baserons"
  },

  {
    id: "10",
    guestName: "Ruth Sola",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "11",
    guestName: "Naomie Lazima",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "12",
    guestName: "Rosalie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "13",
    guestName: "Didiabe",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "14",
    guestName: "Winnie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "15",
    guestName: "Ruth Tshim’s",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "16",
    guestName: "Marco Nama",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "17",
    guestName: "Guelord Mapela",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "18",
    guestName: "Dorcas Ndozi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },

  {
    id: "19",
    guestName: "Percide Diambu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Home Samba"
  },


  {
    id: "20",
    guestName: "Jonas Tshilombo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "21",
    guestName: "Graciela",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "22",
    guestName: "Jonathan Monsengo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "23",
    guestName: "Joél Wiz",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "24",
    guestName: "Juvincy Malembe",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "25",
    guestName: "Mpia Moke",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "26",
    guestName: "Mbo Moke",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "27",
    guestName: "Brunette Bokote",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "28",
    guestName: "George Gabia",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "29",
    guestName: "Marth Masamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elior"
  },

  {
    id: "30",
    guestName: "Merveille Botha",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "31",
    guestName: "Grebert Kuvuyuka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "32",
    guestName: "Vinique Kusonika",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "33",
    guestName: "Couple Chris Onema",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "34",
    guestName: "Seraphin Kuvuyuka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "35",
    guestName: "Jonathan Elome",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "36",
    guestName: "Stephanie Makasi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "37",
    guestName: "Patience Khombi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Admirel"
  },

  {
    id: "38",
    guestName: "Couple Munduku",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jared"
  },

  {
    id: "39",
    guestName: "Couple Mutaona",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jared"
  },

  {
    id: "40",
    guestName: "Couple Diamany",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jared"
  },

  {
    id: "41",
    guestName: "Couple Webi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jared"
  },

  {
    id: "42",
    guestName: "Couple Kasonga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jared"
  },

  {
    id: "43",
    guestName: "Couple Onema",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lamanite"
  },

  {
    id: "44",
    guestName: "Couple Mwemba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lamanite"
  },

  {
    id: "45",
    guestName: "Couple Regule",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lamanite"
  },

  {
    id: "46",
    guestName: "Couple Willy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lamanite"
  },

  {
    id: "47",
    guestName: "Landry Kusonika",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lamanite"
  },

  {
    id: "48",
    guestName: "Charle Khombi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lamanite"
  },

  {
    id: "49",
    guestName: "José Khombi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Mi José"
  },

  {
    id: "50",
    guestName: "Couple Jean",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Mi José"
  },

  {
    id: "51",
    guestName: "Tonton Christian",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Mi José"
  },

  {
    id: "52",
    guestName: "Gislaine Khombi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Mi José"
  },

  {
    id: "53",
    guestName: "Glady Botha",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Mi José"
  },

  {
    id: "54",
    guestName: "Couple Sotaire",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Sariah"
  },

  {
    id: "55",
    guestName: "Couple Padou",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Sariah"
  },

  {
    id: "56",
    guestName: "Couple Pisthou",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Sariah"
  },

  {
    id: "57",
    guestName: "Couple Willy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Sariah"
  },

  {
    id: "58",
    guestName: "Tantine Anto ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Sariah"
  },

  {
    id: "59",
    guestName: "Couple Urbain",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Sariah"
  },

  {
    id: "60",
    guestName: "Emera Mulua",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "61",
    guestName: "Bena Bondo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "62",
    guestName: "Patricia Bondo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "63",
    guestName: "Tonton Abel ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "64",
    guestName: "Nathan Mulua ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "65",
    guestName: "Tonton Prebush ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "66",
    guestName: "Deborah Bokuli ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "67",
    guestName: "Vanessa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "68",
    guestName: "Couple Sacré",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Planète Terre"
  },

  {
    id: "69",
    guestName: "Couple Bokuru",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lehi"
  },

  {
    id: "70",
    guestName: "Couple Matubu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Moroni"
  },

  {
    id: "71",
    guestName: "Couple Tshibangu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Moroni"
  },

  {
    id: "72",
    guestName: "Couple Kakinga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Moroni"
  },

  {
    id: "73",
    guestName: "Couple Kabongo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Moroni"
  },

  {
    id: "74",
    guestName: "Couple Esaï",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Moroni"
  },

  {
    id: "75",
    guestName: "Couple Lifeta",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "76",
    guestName: "Rosy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "77",
    guestName: "Christel",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "78",
    guestName: "Rachel",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "79",
    guestName: "Sifa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "80",
    guestName: "Zawadi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "81",
    guestName: "Couple Mbemba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "82",
    guestName: "Rose Kiama",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elouagne"
  },

  {
    id: "83",
    guestName: "Nephi Ilunga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "84",
    guestName: "Couple Djamba ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "85",
    guestName: "Trésor Manyayi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "86",
    guestName: "Kerene Pemba ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "87",
    guestName: "Couple Junior Manyayi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "88",
    guestName: "Chancel Sinda ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "89",
    guestName: "Dan Tshiswaka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "90",
    guestName: "Aimé",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Nephi"
  },

  {
    id: "91",
    guestName: "Couple Rubin",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Musawu"
  },

  {
    id: "92",
    guestName: "Albertine Mbala",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Musawu"
  },

  {
    id: "93",
    guestName: "Maman Anny Musawu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Musawu"
  },

  {
    id: "94",
    guestName: "Couple Lavie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Musawu"
  },

  {
    id: "95",
    guestName: "Couple Lukozi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Musawu"
  },

  {
    id: "96",
    guestName: "Couple Lukozi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Musawu"
  },

  {
    id: "97",
    guestName: "Couple Luhahi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "98",
    guestName: "Smith",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "99",
    guestName: "Manda Lhanyckel",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "100",
    guestName: "Luhembwe",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "101",
    guestName: "Esther Mawidi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "102",
    guestName: "Armedi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "103",
    guestName: "Priscile",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
  },

  {
    id: "104",
    guestName: "Couple Israël",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Cumora"
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
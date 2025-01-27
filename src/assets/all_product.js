let all_product = [
    {
        id: 1,
        name: "Timber Memories Photo Card",
        image: "https://m.media-amazon.com/images/I/91eDjDcFRyL.jpg",
        new_price: 50.0,
        old_price: 80.5,
        Category:"Birthday",
        description:"A personalized wooden photo card, featuring your custom photo, making a unique and memorable birthday gift."
    },
    {
        id: 2,
        name: "Ocean Bliss Birthday Gift Set",
        image: "https://m.media-amazon.com/images/I/81nrM3sxbwL.jpg",
        new_price: 60.0,
        old_price: 90.0,
        Category:"Birthday",
        description:"A stunning ocean blue birthday gift set that includes a charming coffee cup, a soothing candle, and other delightful small surprises, perfect for creating a relaxing and thoughtful gift experience."
    },
    {
        id: 3,
        name: "Speed Racer Toy Car Set",
        image: "https://target.scene7.com/is/image/Target/GUEST_b7ddcce4-65dd-426f-b7c4-9331ff7dacf7?wid=488&hei=488&fmt=pjpeg",
        new_price: 70.0,
        old_price: 100.0,
        Category:"Birthday",
        description:"A thrilling toy car set featuring fast-paced vehicles, perfect for racing enthusiasts and kids who love adventure and speed."
    },
    {
        id: 4,
        name: "Elegant Trio Gift Set",
        image: "https://www.ahouseofbooks.com/cdn/shop/files/C25F4D32-797C-4E3A-AB45-C84FA048E5C1.jpg?v=1723397330&width=1445",
        new_price: 55.0,
        old_price: 85.0,
        Category:"Birthday",
        description:"A sophisticated gift set featuring a book, a luxurious perfume, a stylish coffee cup, and a golden spoon, perfect for adding a touch of elegance to any occasion."
    },
    {
        id: 5,
        name: "Cosmic Wonders Gift Set",
        image: "https://images-cdn.ubuy.co.in/676436c9af902912cc4b8a64-men-gift-set-gift-box-for-men-birthday.jpg",
        new_price: 65.0,
        old_price: 95.0,
        Category:"Birthday",
        description:" A space-themed black gift set featuring a solar system drawing card, a sleek juice or coffee cup, framed solar system photos, and a surprise gift, perfect for space enthusiasts and stargazers."
    },
    {
        id: 6,
        name: "Aesthetic Polaroid Camera",
        image: "https://images.squarespace-cdn.com/content/v1/629f6ceb09d8e67b950bf507/1654676931893-JNYG88T4F0N9AUD6OEWE/IMG_6475-1440x1800.jpg",
        new_price: 75.0,
        old_price: 105.0,
        Category:"Birthday",
        description:"A stylish and compact polaroid camera, perfect for capturing instant memories with a vintage touch and an aesthetic design."
    },
    {
        id: 7,
        name: "Polaroid Camera",
        image: "https://i.pinimg.com/originals/95/49/82/954982607840442341e17a155577e09a.jpg",
        new_price: 80.0,
        old_price: 120.0,
        Category:"Anniversary",
        description:"A charming pink camera that instantly prints photos, capturing your precious moments with a fun and retro vibe."
    },
    {
        id: 8,
        name: "Custom Light-Up Glass Frame",
        image: "https://i.pinimg.com/originals/12/a7/d5/12a7d52e2a887c90c635634b649cb771.jpg",
        new_price: 85.0,
        old_price: 125.0,
        Category:"Anniversary",
        description:"A unique wooden stand holding a thick glass, featuring a customized photo etched into the glass and illuminated with soft light, creating a beautiful and personalized decorative piece."
    },
    {
        id: 9,
        name: "Personalized Memory Set",
        image: "https://i.pinimg.com/736x/99/02/8e/99028e701ca76c2eee3d06b06360b16d.jpg",
        new_price: 90.0,
        old_price: 130.0,
        Category:"Anniversary",
        description:"A thoughtfully crafted set featuring four unique items: a small handmade bouquet, a collection of photo cards, and a cardboard photo frame, all designed to showcase and celebrate your cherished memories."
    },
    {
        id: 10,
        name: "Personal Journal",
        image: "https://cdn.shopify.com/s/files/1/0445/4003/5222/products/LM0037_1024x1024.jpg?v=1666088177",
        new_price: 95.0,
        old_price: 135.0,
        Category:"Anniversary",
        description:" A beautifully designed personal journal with the cover inscription 'This Is My Year',perfect for jotting down thoughts, reflections, and daily experiences."
    },
    {
        id: 11,
        name: "Vintage Sticker Collection",
        image: "https://i.ebayimg.com/thumbs/images/g/J7cAAOSwISNmcKyO/s-l500.jpg",
        new_price: 100.0,
        old_price: 140.0,
        Category:"Anniversary",
        description:"A curated collection of vintage-inspired stickers, featuring classic designs and retro vibes, perfect for decorating, scrapbooking, or adding a nostalgic touch to your belongings."
    },
    {
        id: 12,
        name: "Mini Message Bottle",
        image: "https://i.etsystatic.com/12096010/c/1608/1273/205/177/il/48bbb2/3675335485/il_500x500.3675335485_pmuw.jpg",
        new_price: 110.0,
        old_price: 150.0,
        Category:"Anniversary",
        description:"A charming small glass bottle containing a tiny book-like sticker or note, perfect for heartfelt messages, keepsakes, or unique gifting."
    },
    {
        id: 13,
        name: "Tiny Memory Bottle",
        image:"https://i.etsystatic.com/5853239/c/2608/2073/189/624/il/9ea6cc/2869171825/il_500x500.2869171825_1ile.jpg",
        new_price: 40.0,
        old_price: 70.0,
        Category:"Wedding",
        description:"A delicate small glass bottle featuring a mini photo inside, making it a unique and sentimental keepsake for cherishing special moments."
    },
    {
        id: 14,
        name: "His & Her Wedding Gift Set",
        image: "https://cdnjs.angroos.com/wp-content/uploads/2023/02/001-104-600x600-1.jpg",
        new_price: 45.0,
        old_price: 75.0,
        Category:"Wedding",
        description:"A beautifully curated wedding gift set featuring a personalized photo, a heartfelt card, and delicious chocolates, making it a perfect way to celebrate the special couple."
    },
    {
        id: 15,
        name: "Mr. & Mrs. Wooden Couple Frame",
        image: "https://m.media-amazon.com/images/I/71H-lcFUXvL._AC_UF350,350_QL50_.jpg",
        new_price: 50.0,
        old_price: 80.0,
        Category:"Wedding",
        description:" A beautifully crafted wooden frame featuring a couple's photo on one half and a heart-shaped hanging keychain inscribed with 'Mr. & Mrs.' on the other, making it a perfect romantic keepsake."
    },
    {
        id: 16,
        name: "Wedding Day Embroidery Hoop",
        image: "https://i.pinimg.com/originals/ac/f3/34/acf334ae5d6f1e19645970e804612bff.jpg",
        new_price: 55.0,
        old_price: 85.0,
        Category:"Wedding",
        description:"A handcrafted wedding gift featuring delicate embroidery of the bride and groom, along with a calendar highlighting their special day— a timeless keepsake to cherish forever."
    },
    {
        id: 17,
        name: "Radha Krishna Painted Photo Frame",
        image: "https://img.freepik.com/premium-photo/happy-janmashtami-lord-radha-krishna-digital-poster-generative-ai_848094-4401.jpg",
        new_price: 60.0,
        old_price: 90.0,
        Category:"Wedding",
        description:"A beautifully crafted photo frame featuring an exquisite hand-painted depiction of Radha and Krishna, symbolizing eternal love and devotion, perfect for home decor or gifting."
    },
    {
        id: 18,
        name: "Floral Radha Krishna Wooden Frame",
        image: "https://th.bing.com/th/id/OIP.wrGDxkKWTE-GweC-EYWqpgHaHa?rs=1&pid=ImgDetMain",
        new_price: 65.0,
        old_price: 95.0,
        Category:"Wedding",
        description:"A stunning Radha Krishna photo frame adorned with an intricately designed floral wooden border, bringing a touch of elegance and devotion to your space."
    },
    {
        id: 19,
        name: "Christmas Gift Pack",
        image: "https://www.boxupgifting.com/cdn/shop/products/DSC08076.jpg?v=1671082242&width=1946",
        new_price: 70.0,
        old_price: 100.0,
        Category:"Festive",
        description:"A delightful Christmas gift pack filled with holiday-themed treats, decorations, and surprises, perfect for spreading festive cheer and joy."
    },
    {
        id: 20,
        name: "Diwali Celebration Gift Pack",
        image: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI437024.jpg",
        new_price: 75.0,
        old_price: 105.0,
        Category:"Festive",
        description:"A festive Diwali gift pack featuring traditional sweets, decorative diyas, and festive goodies, perfect for sharing joy and prosperity with loved ones."
    },
    {
        id: 21,
        name: "Onam Festive Gift Pack",
        image: "https://cdnjs.angroos.com/wp-content/uploads/2022/08/IMG_5034-600x600.jpg",
        new_price: 80.0,
        old_price: 110.0,
        Category:"Festive",
        description:"A special Onam gift pack featuring traditional delicacies, vibrant decorations, and cultural essentials, perfect for celebrating the spirit of this joyous festival."
    },
    {
        id: 22,
        name: "Pongal Celebration Gift Pack",
        image: "https://i.pinimg.com/originals/19/45/47/1945474f1f9a632bd6d441ed6fe44a08.jpg",
        new_price: 85.0,
        old_price: 115.0,
        Category:"Festive",
        description:" A festive Pongal gift pack featuring traditional sweets, decorative items, and cultural essentials, ideal for celebrating the harvest festival with family and friends."
    },
    {
        id: 23,
        name: "Eid Celebration Gift Pack",
        image: "https://th.bing.com/th/id/OIP.G-inAowHav0pMuPODPmoFAHaHX?w=1170&h=1165&rs=1&pid=ImgDetMain",
        new_price: 90.0,
        old_price: 120.0,
        Category:"Festive",
        description:"A festive gift pack designed for Eid, featuring delicious sweets, fragrant perfumes, decorative items, and traditional gifts, perfect for celebrating the joyous occasion with family and friends."
    },
    {
        id: 24,
        name: "Resin Photo Frame",
        image: "https://i.pinimg.com/736x/0c/29/a8/0c29a8fee415c53383f8f86d27ccb2ae.jpg",
        new_price: 95.0,
        old_price: 125.0,
        Category:"Festive",
        description:"A charming raisin photo frame showcasing a beautiful collage of multiple images, making it a perfect gift to preserve and celebrate special memories."
    }
];

export default all_product;

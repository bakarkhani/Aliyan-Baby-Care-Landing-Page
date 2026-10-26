export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
}

export interface SocialProfile {
  name: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'tiktok' | 'whatsapp';
}

export const categories = ['Mother Care', 'Diapers', 'Baby Care'] as const;
export type Category = (typeof categories)[number];

export const featuredSlots: Record<Category, number[]> = {
  'Mother Care': [1, 2, 3, 4, 5],
  Diapers: [1, 2, 3, 4, 5],
  'Baby Care': [1, 2, 3, 4, 5],
};

export interface PolicyItem {
  id: string;
  title: string;
  iconType?: 'truck' | 'shield' | 'package';
  pending?: boolean;
  content: string;
}

export const siteConfig = {
  business: {
    name: 'Aliyan Baby Care',
    tagline: 'Everything Your Little One Needs',
    phone: '0302 5913398',
    phoneHref: 'tel:+923025913398',
    whatsapp: 'https://wa.me/923025913398',
    email: 'aliyanbabycare@gmail.com',
    address: 'Near Trust School Gate No. 9, Amir Town, Harbanspura, Lahore 54850, Pakistan',
    hours: '12:00 PM – 12:00 AM',
  } satisfies BusinessInfo,

  shopUrl: 'https://www.tazzbazar.com/',

  socialProfiles: [
    { name: 'Facebook', href: 'https://www.facebook.com/aliyanbabycare/', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/aliyanbabycare/', icon: 'instagram' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@aliyanbabycare', icon: 'tiktok' },
    { name: 'WhatsApp', href: 'https://wa.me/923025913398', icon: 'whatsapp' },
  ] as SocialProfile[],

  policies: [
    {
      id: 'delivery',
      title: 'Delivery coverage & charges',
      iconType: 'truck',
      content:
        'Free delivery is available within a 2 km radius of Amir Town. Additional delivery charges apply outside this area. Please confirm delivery availability and charges before ordering.',
    },
    {
      id: 'payment',
      title: 'Payment methods',
      iconType: 'shield',
      content:
        'Delivery charges must be paid in advance through Easypaisa or JazzCash. The product amount is payable on delivery. Please confirm the payment arrangement before ordering.',
    },
    {
      id: 'inspection',
      title: 'Parcel inspection',
      iconType: 'package',
      content:
        'Please inspect your parcel before accepting delivery. If parcel inspection is not permitted at delivery, you may refuse the parcel.',
    },
    {
      id: 'returns',
      title: 'Returns, exchanges & cancellations',
      pending: true,
      content:
        'The detailed policy is pending business confirmation. Please contact Aliyan Baby Care to discuss an order before making a decision.',
    },
    {
      id: 'warranty',
      title: 'Product warranty',
      pending: true,
      content:
        'Warranty coverage, where applicable, depends on the particular product and its terms. Please check the product-specific warranty information. Further guidance is pending business confirmation.',
    },
    {
      id: 'privacy',
      title: 'Privacy & terms',
      pending: true,
      content:
        'Privacy information and terms of service are pending review and confirmation. These draft placeholders are not legal advice.',
    },
  ] as PolicyItem[],

  socialPlaceholders: [
    'Shop moments',
    'Product feature',
    'A little reel',
    'Care essentials',
    'From our shelves',
    'Community update',
  ],
};

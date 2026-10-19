# Aliyan Baby Care — Landing Page Brief

**Document status:** Working brief; confirmed requirements are distinguished from pending details.  
**Business:** Aliyan Baby Care  
**Purpose:** Define the brand, design, content, customer journey, and implementation requirements for the landing page.

---

## 1. Project purpose and funnel

The landing page is the **start of the customer funnel**, not the e-commerce store itself.

Its jobs are to:
- Introduce Aliyan Baby Care and build trust.
- Present the brand through a distinctive animated hero.
- Showcase selected featured products.
- Display social media content.
- Explain key delivery, payment, and customer policies.
- Direct shoppers to the existing e-commerce site on TazzBazar.

The landing page must **not duplicate the full product catalogue, shopping cart, or checkout**.

### Customer journey
1. Visitor arrives at the Aliyan Baby Care landing page.
2. Visitor sees the animated hero and explores featured products.
3. Visitor may browse the social showcase and customer information.
4. Visitor clicks through to TazzBazar to shop.

**E-commerce destination:** https://www.tazzbazar.com/

---

## 2. Brand identity

- **Brand name:** Aliyan Baby Care
- **Tagline:** “Everything Your Little One Needs”
- **Brand personality:** Cute and classy, modern, trustworthy, affordable, friendly, and approachable.
- **Positioning:** A blend of a gentle baby boutique and an affordable neighbourhood baby-care store.
- **Primary mascot concept:** A baby resting on a golden crescent moon.
- **Hero artwork:** User-provided watercolor illustration of a sleeping baby on a crescent moon, with pastel clouds, stars, and botanical leaves.
- **Footer mascot:** A separate watercolor illustration of the baby sitting on the moon and clearly waving goodbye. The current generated version is approved as a temporary asset and may be refined later.

### Visual design direction and confirmed color system
Use a soft, calm, watercolor nursery aesthetic that complements the supplied sleeping-baby-on-the-moon mascot. The user has supplied and confirmed the palette below; **this palette replaces any earlier suggested lavender-dominant palette**. Keep the site cute and classy, modern, trustworthy, and affordable rather than overly childish. Avoid neon colours, dark-heavy themes, clutter, and excessive emoji use.

Use these exact CSS custom properties as the source of truth across the landing page:
```css
:root {
  --brand-primary: #80C9C5;
  --brand-dark: #286F70;
  --background: #FAF8F3;
  --background-alt: #F3EFE6;
  --surface: #FFFFFF;
  --surface-mint: #DCEFE8;
  --accent-peach: #F2D5C7;
  --text-primary: #354544;
  --text-secondary: #586966;
  --button-primary: #286F70;
  --button-text: #FFFFFF;
  --border: #E5E5D9;
}
```

#### How to apply the palette
- **Main page background:** `--background` (`#FAF8F3`) for a warm, soft cream rather than stark white.
- **Alternate section backgrounds:** `--background-alt` (`#F3EFE6`) to gently separate the hero, product, social, and policy sections without heavy boxes.
- **Cards and content surfaces:** `--surface` (`#FFFFFF`) with subtle `--border` (`#E5E5D9`) borders and restrained shadows.
- **Brand color and soft highlights:** `--brand-primary` (`#80C9C5`) for decorative elements, active category indicators, small illustrations, and hover details.
- **Primary headings, navigation emphasis, and important actions:** `--brand-dark` (`#286F70`). Use it for readable contrast rather than using pale mint for text on cream.
- **Buttons:** `--button-primary` (`#286F70`) with `--button-text` (`#FFFFFF`); provide visible hover, focus, and disabled states.
- **Mint-tinted panels:** `--surface-mint` (`#DCEFE8`) for gentle backgrounds behind delivery notes, social highlights, or small feature callouts.
- **Warm accent:** `--accent-peach` (`#F2D5C7`) in small doses for friendly details, badges, and decorative accents. Do not let it compete with the mascot.
- **Text:** `--text-primary` (`#354544`) for body copy and headings; `--text-secondary` (`#586966`) for supporting copy, with sufficient contrast.
- **Mascot artwork:** retain natural moon-gold, cloud, and botanical colors already present in the provided artwork as illustration-specific accents. Do not add a new site-wide lavender palette or recolor the mascot to force a match.

The result should feel cohesive with the mascot: warm cream foundations, teal branding and controls, pale mint section accents, and restrained peach details. Apply the same tokens consistently across desktop and mobile, including focus states and interactive components. Check contrast and readability; color must not be the only way to communicate a state.

---

## 3. Landing page structure

The page has four primary sections, followed by a clearly designed footer ending.

### Section 1 — Animated hero

The hero uses the original sleeping-baby-on-the-moon artwork as its visual foundation.

Requirements:
- The **top shelf contains only the brand name** “Aliyan Baby Care”.
- The baby appears comfortable and asleep on the moon.
- On the left, a leafy veil hangs from the top shelf down toward the middle of the hero. It carries the **Shop** navigation link.
- On the right, a star hangs from the top shelf on a visible string and carries the **Contact** navigation link.
- Shop navigates to the featured products section.
- Contact navigates to the contact information in the lower part of the page.
- The hero should feel peaceful, spacious, warm, and premium without losing its approachable character.

Preferred animation approach: **layered animation**, if the artwork can be separated cleanly:
- Very subtle breathing motion for the baby.
- Gentle floating motion for the moon or composition.
- Slow sway of the leafy Shop decoration.
- Gentle swing of the hanging Contact star.
- Subtle twinkling stars and minimal cloud movement.
- Respect reduced-motion preferences; provide a static alternative.

If separate image layers are not practical, use subtle movement and transitions without distorting the illustration.

### Section 2 — Featured product slider

The slider is a **preview and discovery feature**, not a full catalogue.

There are three toggle categories, in this exact left-to-right order:
1. **Mother Care** — left toggle.
2. **Diapers** — centre toggle; selected by default.
3. **Baby Care** — right toggle.

Each toggle contains five featured product slots, for **15 featured products total**. The user will select the actual products later. Do not invent product names, product IDs, prices, images, or URLs.

Slider behaviour:
- Show one product at a time.
- Slide horizontally from right to left when moving to the next item.
- Switching category changes the five featured items for that category and resets the slider appropriately.
- Include a product image, product name, and an appropriate Shop Now action. Price display may be added if it is useful and matches the current TazzBazar data.
- Use responsive controls and accessible labels.

#### Product categories known so far
- Diapers.
- Baby wipes.
- Sanitary pads.
- Hygiene essentials, such as tissues and other hygiene products the shop stocks.
- Baby care and feeding items, such as feeding bottles/feeders and related accessories.

These are known inventory categories; their exact mapping to the three slider toggles can be finalized when the featured products are selected.

#### TazzBazar product linking rules
- The **featured/top product** must link directly to its matching product page on TazzBazar.
- Use the actual TazzBazar product ID and matching product URL. Maintain an explicit mapping between each featured item and its TazzBazar product ID/URL.
- Never invent product IDs or assume product IDs can be guessed from names.
- Other/general product browsing links should lead to the relevant **Baby Care category** on TazzBazar.
- The Baby Care category URL is **currently unavailable** and must remain a clearly marked placeholder until the user supplies the correct URL.
- The TazzBazar homepage is https://www.tazzbazar.com/.
- Once the 15 featured products are chosen, collect their real TazzBazar product IDs and URLs.

The landing page does not host checkout, cart management, or the full product catalogue.

### Section 3 — Visual social showcase

The user selected the **visual showcase** approach.

Requirements:
- Display a curated grid of actual promotional posts, product photos, and reels.
- Link items to their original social media posts when the post URLs are available.
- Use the user's real published content rather than generated placeholder content in the production page.
- Keep the layout responsive and visually consistent with the watercolor theme.
- This is a curated showcase, not necessarily a live feed. Do not promise automatic updates until a supported integration is chosen.

Confirmed social profiles:
- Facebook: https://www.facebook.com/aliyanbabycare/
- Instagram: https://www.instagram.com/aliyanbabycare/
- TikTok: https://www.tiktok.com/@aliyanbabycare
- WhatsApp: https://wa.me/923025913398

### Section 4 — Customer information and policies

The user selected **both**:
1. A dedicated expandable information/policies section.
2. A structured footer with contact details, navigation, and legal links.

Potential expandable information items:
- Delivery coverage and charges.
- Payment methods.
- Parcel inspection.
- Returns, exchanges, and cancellations.
- Product warranty guidance.
- Privacy policy.
- Terms of service.
- Contact details and store location.

Do not invent legal promises or a warranty/returns guarantee. Where the business policy has not been fully defined, use a pending placeholder for review before publication.

### Footer ending and farewell mascot

The bottom of the page must clearly feel like the end of the landing page rather than an abrupt stop.

Requirements:
- Use a structured, multi-column footer inspired by the general layout of the user's provided footer reference, but do not copy another brand's identity, logo, or exact design.
- Include useful links, contact information, and social destinations.
- Adapt columns responsively for mobile.
- End with the separate waving-baby-on-the-moon mascot illustration.
- The mascot's body language should clearly communicate “bye” / farewell.
- Include a short closing line, such as “Sweet dreams, little ones.”
- Include the tagline “Everything Your Little One Needs”, the brand name, Lahore, Pakistan, and a copyright line.
- The generated waving mascot is approved for now; the user may replace or refine it later.

---

## 4. Business information

- **Business name:** Aliyan Baby Care
- **Phone / WhatsApp:** 0302 5913398
- **WhatsApp click-to-chat:** https://wa.me/923025913398
- **Email:** aliyanbabycare@gmail.com
- **Address:** Aliyan Baby Care, Near Trust School Gate No. 9, Amir Town, Harbanspura, Lahore 54850, Pakistan
- **Opening hours:** 12:00 PM – 12:00 AM

Show contact information clearly in the lower page/footer. The Contact hero decoration should navigate to this information.

---

## 5. Delivery policy

Current business information:
- Free delivery is intended within a **2 km radius of Amir Town**.
- Additional delivery charges apply outside the free-delivery radius.
- The exact delivery availability and charges outside the radius should be confirmed with the business before an order is accepted.
- Do not imply that delivery is free everywhere.
- Display delivery limits in clear, concise wording before customers leave for the e-commerce checkout where practical.

Suggested wording for review:
> Free delivery within a 2 km radius of Amir Town. Additional delivery charges apply outside this area. Please confirm delivery availability and charges before ordering.

---

## 6. Payment and parcel inspection policy

### Delivery-charge payment
- Delivery charges must be paid online **before dispatch**.
- Accepted advance methods: **Easypaisa and JazzCash**.
- The product amount is collected **on delivery**.
- The website should explain this clearly before the customer proceeds to order on TazzBazar.
- Confirm that the e-commerce checkout can support or communicate this arrangement before treating the integration as complete.

Suggested wording for review:
> Delivery charges must be paid in advance through Easypaisa or JazzCash. The product amount is payable on delivery.

### Parcel inspection
Confirmed policy:
- Customers may inspect the parcel before accepting delivery.
- If parcel inspection is not permitted at delivery, customers may refuse the parcel.

Suggested wording:
> Please inspect your parcel before accepting delivery. If parcel inspection is not permitted at delivery, you may refuse the parcel.

### Policies still requiring business confirmation
- What happens if a customer discovers a missing, damaged, or incorrect item after accepting the parcel.
- Whether change-of-mind returns are accepted.
- The time limit and process for reporting a problem.
- Product-specific warranty terms and any exclusions.
- Whether any product types have special hygiene-related return restrictions.

Do not claim that every product has a warranty. Customers should check whether a particular product has a warranty and review its terms.

---

## 7. User experience and accessibility

- Responsive across mobile phones, tablets, laptops, and desktop screens.
- Maintain the calm, uncluttered visual identity throughout all sections.
- Use clear text hierarchy and readable contrast against pastel backgrounds.
- Keep navigation and category controls usable on touch screens.
- Ensure buttons and links have meaningful labels and accessible focus states.
- Avoid relying on animation alone to communicate navigation.
- Respect reduced-motion preferences.
- Optimise images and animation assets for performance, especially on mobile connections.
- Do not use fake live social content or fabricated product details.
- Use actual profile, product, and category URLs once supplied.

---

## 8. Technical and content boundaries

- The landing page is separate from TazzBazar's e-commerce functionality.
- TazzBazar handles the full product catalogue and shopping/checkout experience.
- The landing page links out to TazzBazar rather than duplicating its cart or checkout.
- Featured products must map to real TazzBazar product IDs and product URLs.
- The general/category destination is intended to be the Baby Care category on TazzBazar; its URL is pending.
- Social content should use actual posts and links selected for the showcase.
- Keep content, social links, product mappings, and policy text easy to update later.

---

## 9. Confirmed choices summary

| Item | Decision |
|---|---|
| Brand name | Aliyan Baby Care |
| Tagline | Everything Your Little One Needs |
| Brand personality | Cute, classy, trustworthy, affordable, approachable |
| Hero artwork | Sleeping baby resting on a crescent moon |
| Hero navigation | Shop on hanging leafy veil; Contact on hanging star |
| Top shelf | Brand name only |
| Hero animation | Layered animation preferred |
| Slider categories | Mother Care / Diapers / Baby Care |
| Default slider category | Diapers |
| Slider items | Five per category; 15 total |
| Slider direction | Right to left; one item visible at a time |
| Featured products | To be selected by the user later |
| E-commerce destination | TazzBazar |
| Featured product link | Direct to the matching TazzBazar product page using its real ID |
| Other/general shopping link | Baby Care category on TazzBazar; URL pending |
| Social section | Visual showcase of actual posts, product photos, and reels, plus social profile icons/links |
| Information section | Expandable policies plus structured footer |
| Footer ending | Separate waving-baby-on-moon farewell mascot |
| Landing-page checkout | Not included; TazzBazar handles e-commerce |

---

## 10. Outstanding items

These items can be completed later; they should not block creation of the initial landing page brief.

1. **15 featured products:** Select five for Mother Care, five for Diapers, and five for Baby Care.
2. **TazzBazar product IDs and URLs:** Collect the exact IDs and product-page links for the chosen featured items.
3. **Baby Care category URL:** Add when the category becomes available.
4. **Social showcase content:** Select actual post/reel URLs and images.
5. **Delivery area confirmation:** Confirm how the 2 km radius is measured and the charges beyond it.
6. **Full returns and warranty policies:** Confirm handling of damaged, missing, incorrect, or unwanted products.
7. **E-commerce payment compatibility:** Verify how the TazzBazar checkout will communicate prepaid delivery charges and payment on delivery for products.
8. **Final artwork assets:** Prepare clean, web-optimised hero layers and use the current waving mascot as the temporary footer asset.
9. **Footer wording:** Confirm final policy page names and legal copy before publishing.
10. **Landing-page domain and hosting:** Decide where the landing page will be published, if not already decided.

---

## 11. Implementation principle

Build the landing page as a distinctive, lightweight brand experience that guides visitors toward the existing e-commerce store. Prioritise the animated hero, clear featured-product links, real social proof, transparent delivery/payment information, responsive performance, and a memorable mascot-led ending.

**Do not fabricate missing business information.** Use clearly labelled placeholders for any pending URLs, product IDs, product details, or policy text.

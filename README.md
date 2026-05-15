# ⚡ HAREND - Neural Infrastructure Next.js Template

**Harend** is a premium, cyber-neural & Web3-themed landing page template built with Next.js 15+, Tailwind CSS, and Framer Motion. Engineered for AI SaaS, Cloud Computing, or futuristic tech startups demanding high-end visuals and top-tier performance.

---

## 🚀 Quick Start

Follow these steps to get your development environment up and running:

1.  **Clone the Project:**
    Ensure you have Node.js installed on your machine.
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
4.  **Open in Browser:** Navigate to `http://localhost:3000`.

---

## 🛠 Tech Stack

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Lottie React](https://github.com/LottieFiles/lottie-react)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Inter & JetBrains Mono (via Next Font)

---

## 📂 Project Structure

A quick guide to navigating the Harend directory:

* 📂 **`/app`**: Main routing. Contains `Home`, `/explore`, `/pricing`, and `/ecosystem` pages.
* 📂 **`/components`**:
    * `layout/`: Global elements like Navbar and Footer.
    * `sections/`: All UI blocks for the landing page (Hero, ExplorePreview, PricingPreview, etc.).
    * `ui/`: Reusable small components such as `AuthModal`.
* 📂 **`/data`**: **The Content Hub.** Manage all text, pricing plans, and feature lists here without touching the JSX.
* 📂 **`/public`**: Static assets including Logos, Images, and Lottie JSON files.

---

## 🎨 Customization Guide (Low-Code Approach)

This project is built for ease of use. Most changes can be made within the `@/data` folder.

### 1. Branding & Navigation
Update `data/global/navbar.ts` and `footer.ts` to change your Company Name, Logo paths, and navigation links.

### 2. Pricing Plans
Modify `data/pricing/data.ts` to add/remove plans, change prices, or toggle the "Popular" badge on specific cards.

### 3. Lottie Animations
The high-end animations in the Hero and Ecosystem sections are powered by Lottie.
* Place your new JSON animation files in `public/assets/lottie/`.
* Update the path in the corresponding data file or keep the filename the same to swap them instantly.

### 4. Color Scheme
The signature neon gradients (AI Blue, AI Purple, Cyan, Emerald) are defined in `tailwind.config.ts`. You can modify the hex codes there to match your brand identity.

---

## 📦 Deployment

Harend is optimized for **Vercel** deployment:
1. Push your repository to GitHub.
2. Connect your repository to Vercel.
3. The build settings are pre-configured (`npm run build`).

---

## 📜 License

Exclusive commercial license. Redistributing the source code as a standalone template is strictly prohibited.

**Support:** For technical inquiries or bug reports, please contact the developer via the marketplace dashboard.
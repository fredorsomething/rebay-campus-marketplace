# ReBay - Campus Marketplace

A modern, full-fledged eBay clone built specifically for boarding school students to easily list and sell their belongings. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 🏠 **Homepage**
- Hero section with call-to-action buttons
- Featured listings showcase
- Category browsing
- Trust indicators and features

### 📋 **Listings**
- Comprehensive search and filtering
- Grid and list view modes
- Price range, category, and condition filters
- Sorting options (price, date)
- Real-time search results

### 🛍️ **Individual Listing Pages**
- High-quality image galleries with thumbnails
- Detailed product descriptions
- Seller information and ratings
- Contact and offer buttons
- Safety and trust indicators
- Savings percentage display

### 👤 **User Profiles**
- Student information (dorm, grade, bio)
- Active listings management
- Sold items history
- Favorites collection
- User statistics and ratings

### ➕ **Create Listings**
- Multi-step form with validation
- Image upload with preview
- Category and condition selection
- Pricing with original price for savings display
- Tags and location information

### 🎨 **Design Features**
- Modern, minimalistic design
- Fun primary color scheme (blue and purple gradients)
- 3D button effects with depth
- Click sound effects for interactive elements
- Responsive design for all devices
- Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Custom 3D-styled components

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rebay
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
rebay/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── listings/          # Listings pages
│   ├── create/            # Create listing page
│   ├── profile/           # User profile page
│   └── listing/[id]/      # Individual listing pages
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── listing/          # Listing-related components
│   └── category/         # Category components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── data/                 # Mock data for development
└── public/               # Static assets
```

## Key Components

### UI Components
- **Button**: 3D-styled buttons with click sound effects
- **Card**: Elevated cards with hover effects
- **Input**: Styled form inputs with validation

### Layout Components
- **Header**: Navigation with search and user actions
- **Footer**: Site information and links
- **Layout**: Main layout wrapper

### Feature Components
- **ListingCard**: Display individual listings with savings badges
- **CategoryCard**: Category browsing with icons
- **Image Gallery**: Multi-image display with thumbnails

## Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#d946ef to #c026d3)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Responsive padding and margins
- Grid gaps for layout consistency

## Features in Detail

### Savings Display
- Shows both dollar amount and percentage saved
- Green badges for items with original prices
- Clear visual hierarchy for pricing information

### 3D Effects
- Box shadows for depth perception
- Hover animations with scale transforms
- Click feedback with sound effects
- Smooth transitions for all interactions

### Image Handling
- Multiple image upload support
- Image preview with drag-and-drop
- Thumbnail navigation
- Fallback for missing images

### Search & Filtering
- Real-time search across titles and descriptions
- Multiple filter criteria
- Sort options for different preferences
- Clear filter state management

## Future Enhancements

- [ ] Database integration (Neon PostgreSQL)
- [ ] User authentication and authorization
- [ ] Real-time messaging between users
- [ ] Payment processing integration
- [ ] Push notifications
- [ ] Mobile app development
- [ ] Advanced analytics and reporting
- [ ] Social features (following, reviews)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ for boarding school students everywhere.

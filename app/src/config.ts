import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        // Welcome slide with modern design
        {
          media: {
            type: 'emoji',
            src: '📈',
            size: 80,
          },
          title: '🚀 Welcome to FX Cartel',
          description: 'Join our <b>exclusive trading community</b> and take your forex trading to the next level with professional signals and mentorship',
          textAlign: 'center',
          shape: 'rounded',
          button: 'Get Started 🎯',
        },

        // User information form with dropdown
        {
          extends: 'form',
          media: {
            type: 'emoji',
            src: '👋',
            size: 60,
          },
          title: 'Tell us about yourself',
          description: 'Help us personalize your trading experience',
          textAlign: 'center',
          form: [
            {
              id: 'country',
              placeholder: 'Select your country',
              type: 'select',
              options: [
                'South Africa 🇿🇦',
                'United States 🇺🇸',
                'United Kingdom 🇬🇧',
                'Canada 🇨🇦',
                'Australia 🇦🇺',
                'Germany 🇩🇪',
                'France 🇫🇷',
                'Italy 🇮🇹',
                'Spain 🇪🇸',
                'Netherlands 🇳🇱',
                'Switzerland 🇨🇭',
                'Sweden 🇸🇪',
                'Norway 🇳🇴',
                'Denmark 🇩🇰',
                'Finland 🇫🇮',
                'Japan 🇯🇵',
                'Singapore 🇸🇬',
                'Hong Kong 🇭🇰',
                'UAE 🇦🇪',
                'Nigeria 🇳🇬',
                'Kenya 🇰🇪',
                'Ghana 🇬🇭',
                'Egypt 🇪🇬',
                'India 🇮🇳',
                'Brazil 🇧🇷',
                'Mexico 🇲🇽',
                'Argentina 🇦🇷',
                'Chile 🇨🇱',
                'Other'
              ],
            },
            {
              id: 'referral_source',
              placeholder: 'How did you hear about us?',
              type: 'select',
              options: [
                'Social Media (Instagram/Facebook)',
                'YouTube',
                'TikTok',
                'Twitter/X',
                'Friend Referral',
                'Google Search',
                'Trading Forum',
                'Telegram Group',
                'WhatsApp',
                'Other'
              ],
            },
          ],
          button: 'Continue ➡️',
        },

        // Trading experience question with modern styling
        {
          media: {
            type: 'emoji',
            src: '🤔',
            size: 70,
          },
          title: 'Trading Experience',
          description: 'Do you have any forex trading experience?',
          textAlign: 'center',
          shape: 'rounded',
          list: [
            '💡 This helps us recommend the right service for you',
            '📚 No experience? No problem - we\'ll guide you!',
            '🎯 Experienced? We have advanced options too',
          ],
          button: {
            content: '✅ Yes, I have experience',
            to: '/experienced',
          },
        },

        // No experience path with better design
        {
          media: {
            type: 'emoji',
            src: '🌟',
            size: 70,
          },
          title: 'Perfect! Let\'s Start Your Journey',
          description: 'We\'ll help you become a successful trader from scratch',
          textAlign: 'center',
          shape: 'rounded',
          list: [
            '📖 Complete beginner-friendly training',
            '👨🏫 Personal mentorship & guidance',
            '📊 Free trading signals included',
            '💰 Learn proper risk management',
            '🎯 Build a profitable trading strategy',
          ],
          button: {
            content: '🚀 Start Learning Now',
            to: '/mentorship',
          },
        },
      ],
    },

    // Experienced traders - service selection with modern design
    {
      extends: 'slide',
      path: '/experienced',
      media: {
        type: 'emoji',
        src: '🎯',
        size: 70,
      },
      title: 'Choose Your Trading Service',
      description: 'Select the perfect option for your trading goals',
      textAlign: 'center',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '📊',
            size: 24,
          },
          text: '<b>Free Signals</b> - Daily forex signals with basic analysis',
        },
        {
          media: {
            type: 'emoji',
            src: '🎓',
            size: 24,
          },
          text: '<b>Mentorship & Training</b> - Complete education + free signals',
        },
        {
          media: {
            type: 'emoji',
            src: '💎',
            size: 24,
          },
          text: '<b>VIP Signals</b> - Premium signals with 85%+ accuracy',
        },
      ],
      button: {
        content: '📊 Start with Free Signals',
        to: '/free-signals',
      },
    },

    // Free Signals Path with modern styling
    {
      extends: 'slide',
      path: '/free-signals',
      media: {
        type: 'emoji',
        src: '🆓',
        size: 70,
      },
      title: '🎉 Free Signals Setup',
      description: 'Get started with our free daily trading signals',
      textAlign: 'center',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '🏦',
            size: 20,
          },
          text: 'Sign up with <b>HFM Broker</b> (our trusted partner)',
        },
        {
          media: {
            type: 'emoji',
            src: '🔑',
            size: 20,
          },
          text: 'Use Partner ID: <b>YOUR_PARTNER_ID</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '💰',
            size: 20,
          },
          text: 'Minimum deposit: <b>R1,000.00</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '✅',
            size: 20,
          },
          text: 'Account must be <b>funded</b> to receive signals',
        },
      ],
      button: {
        content: '❓ Need Help Setting Up?',
        to: '/help',
      },
    },

    // Help with broker setup - modern design
    {
      extends: 'slide',
      path: '/help',
      media: {
        type: 'emoji',
        src: '📋',
        size: 70,
      },
      title: '📖 HFM Broker Setup Guide',
      description: 'Follow these simple steps to set up your trading account',
      textAlign: 'center',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '1️⃣',
            size: 18,
          },
          text: 'Visit <b>HFM Broker</b> website',
        },
        {
          media: {
            type: 'emoji',
            src: '2️⃣',
            size: 18,
          },
          text: 'Click "<b>Open Live Account</b>"',
        },
        {
          media: {
            type: 'emoji',
            src: '3️⃣',
            size: 18,
          },
          text: 'Enter Partner ID: <b>YOUR_PARTNER_ID</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '4️⃣',
            size: 18,
          },
          text: 'Complete registration & verify identity',
        },
        {
          media: {
            type: 'emoji',
            src: '5️⃣',
            size: 18,
          },
          text: 'Make minimum deposit of <b>R1,000</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '6️⃣',
            size: 18,
          },
          text: 'Send us proof of your funded account',
        },
      ],
      button: {
        content: '✅ My Account is Ready',
        to: '/account-verified',
      },
    },

    // Account verification complete with celebration
    {
      extends: 'slide',
      path: '/account-verified',
      media: {
        type: 'emoji',
        src: '🎉',
        size: 80,
      },
      title: '🎊 Almost There!',
      description: 'Just one final step to join our <b>exclusive free signals community</b>',
      textAlign: 'center',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '📸',
            size: 20,
          },
          text: 'Send <b>screenshot</b> of your funded account',
        },
        {
          media: {
            type: 'emoji',
            src: '⏰',
            size: 20,
          },
          text: 'Wait for verification (<b>24-48 hours</b>)',
        },
        {
          media: {
            type: 'emoji',
            src: '📱',
            size: 20,
          },
          text: 'Get added to our <b>free signals channel</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '💎',
            size: 20,
          },
          text: 'Start receiving <b>daily premium signals</b>',
        },
      ],
      button: '📤 Submit Account Proof',
    },

    // Mentorship package with modern design
    {
      extends: 'paywall',
      path: '/mentorship',
      media: {
        type: 'emoji',
        src: '🎓',
        size: 70,
      },
      title: '🚀 Mentorship & Training',
      description: 'Transform into a <b>professional trader</b> with our complete education program',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '👨🏫',
            size: 20,
          },
          text: '<b>One-on-one mentorship</b> sessions with pro traders',
        },
        {
          media: {
            type: 'emoji',
            src: '📚',
            size: 20,
          },
          text: '<b>Complete trading course</b> (beginner to advanced)',
        },
        {
          media: {
            type: 'emoji',
            src: '📊',
            size: 20,
          },
          text: '<b>Free premium signals</b> included daily',
        },
        {
          media: {
            type: 'emoji',
            src: '🛡️',
            size: 20,
          },
          text: '<b>Risk management</b> & psychology training',
        },
        {
          media: {
            type: 'emoji',
            src: '📺',
            size: 20,
          },
          text: '<b>Live trading sessions</b> & market analysis',
        },
      ],
      products: [
        {
          id: 'mentorship_monthly',
          title: '📅 Monthly Mentorship',
          description: 'R2,500/month',
          discount: '',
          price: 2500,
        },
        {
          id: 'mentorship_quarterly',
          title: '💎 Quarterly Package',
          description: 'R6,000 (Save R1,500)',
          discount: '🔥 Best Value',
          price: 6000,
        },
      ],
      mainButtonText: '🚀 Start Mentorship - R{price}',
      links: [
        {
          text: '← Back to Free Signals',
          href: '/free-signals',
        },
        {
          text: 'View VIP Signals →',
          href: '/vip-signals',
        },
      ],
    },

    // VIP Signals with premium design
    {
      extends: 'paywall',
      path: '/vip-signals',
      media: {
        type: 'emoji',
        src: '💎',
        size: 70,
      },
      title: '💎 VIP Signals',
      description: 'Join the <b>elite traders</b> with our premium signal service',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '🎯',
            size: 20,
          },
          text: '<b>Premium daily signals</b> with detailed analysis',
        },
        {
          media: {
            type: 'emoji',
            src: '📈',
            size: 20,
          },
          text: '<b>85%+ win rate</b> - proven track record',
        },
        {
          media: {
            type: 'emoji',
            src: '⏰',
            size: 20,
          },
          text: '<b>Multiple timeframes</b> - scalping to swing',
        },
        {
          media: {
            type: 'emoji',
            src: '🏆',
            size: 20,
          },
          text: '<b>Priority support</b> & direct trader access',
        },
        {
          media: {
            type: 'emoji',
            src: '📊',
            size: 20,
          },
          text: '<b>Exclusive market analysis</b> & insights',
        },
      ],
      products: [
        {
          id: 'vip_monthly',
          title: '💎 VIP Monthly',
          description: 'R1,500/month',
          discount: '',
          price: 1500,
        },
        {
          id: 'vip_yearly',
          title: '👑 VIP Yearly',
          description: 'R15,000 (Save R3,000)',
          discount: '🔥 Save 17%',
          price: 15000,
        },
      ],
      mainButtonText: '💎 Get VIP Access - R{price}',
      links: [
        {
          text: '← Back to Free Signals',
          href: '/free-signals',
        },
        {
          text: 'View Mentorship →',
          href: '/mentorship',
        },
      ],
    },
  ],
});

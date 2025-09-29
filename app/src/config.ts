import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
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
        {
          media: {
            type: 'emoji',
            src: '📊',
            size: 70,
          },
          title: 'Do you currently trade?',
          description: 'Help us understand your current trading activity',
          textAlign: 'center',
          shape: 'rounded',
          list: [
            '💡 This helps us recommend the right service for you',
            '📈 Active traders get different options',
            '🎯 New traders get guided support',
          ],
          button: {
            content: '✅ Yes, I currently trade',
            to: '/current-trader',
          },
        },
      ],
    },

    {
      extends: 'slide',
      path: '/current-trader',
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
          text: '<b>1. Free Signals Only</b> - Daily forex signals with basic analysis',
        },
        {
          media: {
            type: 'emoji',
            src: '🎓',
            size: 24,
          },
          text: '<b>2. Mentorship & Training</b> - Complete education + free signals',
        },
        {
          media: {
            type: 'emoji',
            src: '💎',
            size: 24,
          },
          text: '<b>3. VIP Signals</b> - Premium signals with 85%+ accuracy',
        },
      ],
      button: {
        content: '📊 1. Free Signals Only',
        to: '/free-signals',
      },
    },

    {
      extends: 'slide',
      path: '/free-signals',
      media: {
        type: 'emoji',
        src: '🆓',
        size: 70,
      },
      title: '🎉 Free Signals Setup',
      description: 'Please sign up with HFM broker with partner ID to get free signals',
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
          text: 'Account must be funded with minimum deposit of <b>R1,000.00</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '✅',
            size: 20,
          },
          text: 'Once funded, you\'ll be added to free signals group',
        },
      ],
      button: {
        content: '❓ Do you need help to sign up?',
        to: '/help',
      },
    },

    {
      extends: 'slide',
      path: '/help',
      media: {
        type: 'emoji',
        src: '📋',
        size: 70,
      },
      title: '📖 HFM Broker Setup Instructions',
      description: 'Follow these simple steps to sign up with partner ID',
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
        content: '❌ No, I can do it myself',
        to: '/no-help',
      },
    },

    {
      extends: 'slide',
      path: '/no-help',
      media: {
        type: 'emoji',
        src: '👍',
        size: 70,
      },
      title: '✅ Perfect!',
      description: 'Once evidence of trading account setup is provided, you will be added to the free signals group',
      textAlign: 'center',
      shape: 'rounded',
      list: [
        {
          media: {
            type: 'emoji',
            src: '📸',
            size: 20,
          },
          text: 'Send <b>screenshot</b> of your funded HFM account',
        },
        {
          media: {
            type: 'emoji',
            src: '✅',
            size: 20,
          },
          text: 'Must show <b>Partner ID</b> and minimum R1,000 deposit',
        },
        {
          media: {
            type: 'emoji',
            src: '⏰',
            size: 20,
          },
          text: 'Verification takes <b>24-48 hours</b>',
        },
        {
          media: {
            type: 'emoji',
            src: '📱',
            size: 20,
          },
          text: 'You\'ll be added to our <b>free signals group</b>',
        },
      ],
      button: '📤 Submit Account Proof',
    },

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
          text: '← Back to Services',
          href: '/current-trader',
        },
        {
          text: 'View VIP Signals →',
          href: '/vip-signals',
        },
      ],
    },

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
          text: '← Back to Services',
          href: '/current-trader',
        },
        {
          text: 'View Mentorship →',
          href: '/mentorship',
        },
      ],
    },
  ],
});
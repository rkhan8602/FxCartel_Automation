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
        {
          media: {
            type: 'emoji',
            src: '🌟',
            size: 70,
          },
          title: 'Perfect! Let\'s Start Your Journey',
          description: 'We\'ll help you become a successful trader with our complete program',
          textAlign: 'center',
          list: [
            '📖 Complete beginner-friendly training',
            '👨🏫 Personal mentorship & guidance',
            '📊 Free trading signals included',
            '💰 Learn proper risk management',
            '🎯 Build a profitable trading strategy',
          ],
          button: {
            content: '❌ No, I don\'t currently trade',
            to: '/mentorship',
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
      description: 'Please sign up with HFM broker with partner ID x to get free signals. Account must be funded with minimum deposit of R1000.00',
      textAlign: 'center',
      list: [
        {
          media: {
            type: 'emoji',
            src: '🏦',
            size: 20,
          },
          text: 'Sign up with <b>HFM Broker</b> using partner ID x',
        },
        {
          media: {
            type: 'emoji',
            src: '💰',
            size: 20,
          },
          text: 'Fund account with minimum <b>R1,000.00</b>',
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
        to: '/help-signup',
      },
    },

    {
      extends: 'slide',
      path: '/help-signup',
      media: {
        type: 'emoji',
        src: '📋',
        size: 70,
      },
      title: '📖 HFM Broker Setup Instructions',
      description: 'Follow these simple steps to sign up with partner ID',
      textAlign: 'center',
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
          text: 'Enter Partner ID: <b>x</b>',
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
        content: '✅ Yes, help me sign up',
        to: '/signup-help',
      },
    },

    {
      extends: 'slide',
      path: '/signup-help',
      media: {
        type: 'emoji',
        src: '👍',
        size: 70,
      },
      title: '✅ We\'ll Help You!',
      description: 'Instructions to sign up with partner id',
      textAlign: 'center',
      list: [
        {
          media: {
            type: 'emoji',
            src: '📞',
            size: 20,
          },
          text: 'Contact our support team',
        },
        {
          media: {
            type: 'emoji',
            src: '🔗',
            size: 20,
          },
          text: 'We\'ll send you the direct signup link',
        },
        {
          media: {
            type: 'emoji',
            src: '👨‍💼',
            size: 20,
          },
          text: 'Personal assistance with account setup',
        },
        {
          media: {
            type: 'emoji',
            src: '✅',
            size: 20,
          },
          text: 'Verification and group access',
        },
      ],
      button: '📞 Contact Support',
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
      description: 'Once evidence of trading account setup provided you will be added to the free signals group',
      textAlign: 'center',
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
          text: 'Must show <b>Partner ID x</b> and minimum R1,000 deposit',
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
      description: 'Transform into a <b>professional trader</b> with our complete education program (includes free signals)',
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
      ],
    },
  ],
});
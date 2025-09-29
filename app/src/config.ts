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
          button: '✅ Yes, I currently trade',
        },
        {
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
          button: '📊 1. Free Signals Only',
        },
        {
          media: {
            type: 'emoji',
            src: '🆓',
            size: 70,
          },
          title: '🎉 Free Signals Setup',
          description: 'Please sign up with HFM broker with partner ID x to get free signals. Account must be funded with minimum deposit of R1000.00',
          textAlign: 'center',
          shape: 'rounded',
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
          button: '❓ Do you need help to sign up?',
        },
        {
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
          button: '✅ Yes, help me sign up',
        },
        {
          media: {
            type: 'emoji',
            src: '👍',
            size: 70,
          },
          title: '✅ Perfect!',
          description: 'Once evidence of trading account setup provided you will be added to the free signals group',
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
      ],
    },
  ],
});
import { defineConfig } from '@tok/generation';

export default defineConfig({
  app: {
    url: 'https://rkhan8602.github.io/FxCartel_Automation/',
  },
  pages: [
    {
      slides: [
        {
          media: {
            type: 'emoji',
            src: '📈',
            size: 80,
          },
          title: '🚀 Welcome to FX Cartel v2',
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
          button: '✅ Yes, I currently trade',
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
          shape: 'rounded',
          button: '❌ No, I don\'t currently trade',
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
            '📊 1. Free Signals Only - Daily forex signals',
            '🎓 2. Mentorship & Training - Complete education + signals',
            '💎 3. VIP Signals - Premium signals with 85%+ accuracy',
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
            '1️⃣ Visit HFM Broker website',
            '2️⃣ Click "Open Live Account"',
            '3️⃣ Enter Partner ID: x',
            '4️⃣ Complete registration & verify identity',
            '5️⃣ Make minimum deposit of R1,000',
            '6️⃣ Send us proof of your funded account',
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
            '📸 Send screenshot of your funded HFM account',
            '✅ Must show Partner ID x and minimum R1,000 deposit',
            '⏰ Verification takes 24-48 hours',
            '📱 You\'ll be added to our free signals group',
          ],
          button: '📤 Submit Account Proof',
        },
      ],
    },
  ],
});
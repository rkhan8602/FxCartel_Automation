import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        // Welcome slide
        {
          title: 'Welcome to FX Cartel',
          description: 'Join our exclusive trading community and take your forex trading to the next level',
          textAlign: 'center',
          button: 'Get Started',
        },

        // User information form
        {
          extends: 'form',
          title: 'Tell us about yourself',
          description: 'Please fill in your details',
          form: [
            {
              id: 'location',
              placeholder: 'Where are you from?',
              type: 'text',
            },
            {
              id: 'referral_source',
              placeholder: 'How did you hear about us?',
              type: 'text',
            },
          ],
          button: 'Continue',
        },

        // Trading experience question
        {
          title: 'Trading Experience',
          description: 'Do you have trading experience?',
          textAlign: 'center',
          button: {
            content: 'Yes, I have experience',
            to: '/experienced',
          },
        },

        // No experience path
        {
          title: 'New to Trading?',
          description: 'Perfect! We\'ll help you get started with the basics',
          list: [
            'Start with our beginner-friendly content',
            'Learn the fundamentals first',
            'Get mentorship to guide your journey',
          ],
          button: {
            content: 'Start Learning',
            to: '/mentorship',
          },
        },
      ],
    },

    // Experienced traders - service selection
    {
      extends: 'slide',
      path: '/experienced',
      title: 'Choose Your Service',
      description: 'Select the option that best fits your trading goals',
      list: [
        {
          text: 'Free Signals Only',
        },
        {
          text: 'Mentorship & Training (includes free signals)',
        },
        {
          text: 'VIP Signals',
        },
      ],
      button: {
        content: 'Free Signals',
        to: '/free-signals',
      },
    },

    // Free Signals Path
    {
      extends: 'slide',
      path: '/free-signals',
      title: 'Free Signals Setup',
      description: 'To get free signals, you need an HFM broker account',
      list: [
        'Sign up with <b>HFM Broker</b>',
        'Use Partner ID: <b>YOUR_PARTNER_ID</b>',
        'Minimum deposit: <b>R1,000.00</b>',
        'Account must be funded to receive signals',
      ],
      button: {
        content: 'Need Help Setting Up?',
        to: '/help',
      },
    },

    // Help with broker setup
    {
      extends: 'slide',
      path: '/help',
      title: 'HFM Broker Setup Guide',
      description: 'Step-by-step instructions to set up your account',
      list: [
        '1. Visit <b>HFM Broker</b> website',
        '2. Click "Open Live Account"',
        '3. Enter Partner ID: <b>YOUR_PARTNER_ID</b>',
        '4. Complete registration form',
        '5. Verify your identity',
        '6. Make minimum deposit of <b>R1,000</b>',
        '7. Send proof of funded account',
      ],
      button: {
        content: 'Account Ready',
        to: '/account-verified',
      },
    },

    // Account verification complete
    {
      extends: 'slide',
      path: '/account-verified',
      title: 'Account Setup Complete!',
      description: 'Once you provide evidence of your funded trading account, you will be added to our free signals Telegram channel.',
      textAlign: 'center',
      list: [
        'Send screenshot of funded account',
        'Wait for verification (24-48 hours)',
        'Get added to free signals channel',
        'Start receiving daily signals',
      ],
      button: 'Submit Account Proof',
    },

    // Mentorship package
    {
      extends: 'paywall',
      path: '/mentorship',
      title: 'Mentorship & Training',
      description: 'Complete trading education with personal guidance',
      list: [
        'One-on-one mentorship sessions',
        'Complete trading course',
        'Free signals included',
        'Risk management training',
        'Live trading sessions',
      ],
      products: [
        {
          id: 'mentorship_monthly',
          title: 'Monthly Mentorship',
          description: 'R2,500/month',
          discount: '',
          price: 2500,
        },
        {
          id: 'mentorship_quarterly',
          title: 'Quarterly Package',
          description: 'R6,000 (Save R1,500)',
          discount: 'Best Value',
          price: 6000,
        },
      ],
      mainButtonText: 'Start Mentorship - R{price}',
      links: [
        {
          text: 'Back to Free Signals',
          href: '/free-signals',
        },
        {
          text: 'View VIP Signals',
          href: '/vip-signals',
        },
      ],
    },

    // VIP Signals
    {
      extends: 'paywall',
      path: '/vip-signals',
      title: 'VIP Signals',
      description: 'Premium signals with higher accuracy and frequency',
      list: [
        'Premium daily signals',
        'Higher win rate (85%+)',
        'Multiple timeframes',
        'Priority support',
        'Exclusive market analysis',
      ],
      products: [
        {
          id: 'vip_monthly',
          title: 'VIP Monthly',
          description: 'R1,500/month',
          discount: '',
          price: 1500,
        },
        {
          id: 'vip_yearly',
          title: 'VIP Yearly',
          description: 'R15,000 (Save R3,000)',
          discount: 'Save 17%',
          price: 15000,
        },
      ],
      mainButtonText: 'Get VIP Access - R{price}',
      links: [
        {
          text: 'Back to Free Signals',
          href: '/free-signals',
        },
        {
          text: 'View Mentorship',
          href: '/mentorship',
        },
      ],
    },
  ],
});

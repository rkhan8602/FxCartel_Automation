import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        {
          title: '🚀 Welcome to FX Cartel',
          description: 'Join our exclusive trading community',
          button: 'Get Started',
        },
        {
          title: 'Tell us about yourself',
          description: 'Help us personalize your experience',
          button: 'Continue',
        },
        {
          title: 'Do you currently trade?',
          description: 'This helps us recommend the right service',
          button: 'Yes, I trade',
        },
      ],
    },
  ],
});
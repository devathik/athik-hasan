// Simple analytics tracking
export const trackEvent = (eventName, eventData = {}) => {
  try {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Add your analytics service here (Google Analytics, Mixpanel, etc.)
      console.log('Track event:', eventName, eventData);
    }
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

export const trackPageView = (path) => {
  try {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Add your analytics service here (Google Analytics, Mixpanel, etc.)
      console.log('Page view:', path);
    }
  } catch (error) {
    console.error('Analytics error:', error);
  }
}; 
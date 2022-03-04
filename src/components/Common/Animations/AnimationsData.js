export const SmallScreenInfoAnimations = {
  animationPhotoLeft: {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.2,
      },
    }),
  },
  animationPhotoRight: {
    hidden: {
      y: 30,
      opacity: 0,
    },

    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.2,
      },
    }),
  },

  animationTextRight: {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.2,
      },
    }),
  },

  animationTextLeft: {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.2,
      },
    }),
  },

  animationParagraph: {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.2,
      },
    }),
  },
};

export const BigScreenInfoAnimations = {
    animationPhotoLeft: {
      hidden: {
        x: -100,
        opacity: 0,
      },
      visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          duration: custom * 0.2,
        },
        
      }),
    },
    animationPhotoRight: {
      hidden: {
        x: 100,
        opacity: 0,
      },
  
      visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          duration: custom * 0.2,
        },
      }),
    },
  
    animationTextRight: {
      hidden: {
        x: 100,
        opacity: 0,
      },
      visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          duration: custom * 0.2,
        },
      }),
    },
  
    animationTextLeft: {
      hidden: {
        x: -100,
        opacity: 0,
      },
      visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          duration: custom * 0.2,
        },
      }),
    },
  
    animationParagraph: {
      hidden: {
        y: -30,
        opacity: 0,
      },
      visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          duration: custom * 0.2,
        },
      }),
    },
  };

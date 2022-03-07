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
        type: "spring",
        stiffness: 100,
        // damping: 10
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
        type: "spring",
        stiffness: 100,
        // damping: 10
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
        type: "spring",
        stiffness: 100,
        // damping: 10
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
        type: "spring",
        stiffness: 100,
        // damping: 10
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
        type: "spring",
        stiffness: 500,
        damping: 10
      },
    }),
  },
};

export const BigScreenInfoAnimations = {
    animationPhotoLeft: {
      hidden: {
        y: -100,
        opacity: 0,
      },
      visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay : custom * 0.3,
          duration:custom * 0.3,
          type: "spring",
          stiffness: 100,
          // damping: 10
        },
        
      }),
    },
    animationPhotoRight: {
      hidden: {
        y: 100,
        opacity: 0,
      },
  
      visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay : custom * 0.3,
          duration: custom * 0.3,
          type: "spring",
          stiffness: 100,
          // damping: 10
        },
      }),
    },
  
    animationTextRight: {
      hidden: {
        y: 100,
        opacity: 0,
      },
      visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay : custom * 0.3,
          duration: custom * 0.3,
          type: "spring",
          stiffness: 100,
          // damping: 10
        },
      }),
    },
  
    animationTextLeft: {
      hidden: {
        y: -100,
        opacity: 0,
      },
      visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay : custom * 0.3,
          duration:custom * 0.3,
          type: "spring",
          stiffness: 100,
          // damping: 10
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
          duration: custom * 0.3,
          type: "spring",
          stiffness: 500,
          damping: 10
        },
      }),
    },
  };

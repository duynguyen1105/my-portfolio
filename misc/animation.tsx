import { keyframes } from 'styled-components'

const slideInUp = keyframes`
from {
  transform: translate3d(0, 100%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`
const slideInDown = keyframes`
from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
const slideInLeft = keyframes`
 from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
const slideInRight = keyframes`
 from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

const slideOutDown = keyframes`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(0, 100%, 0);
}
`

const slideOutLeft = keyframes`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(-100%, 0, 0);
}
`

const slideOutRight = keyframes`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(100%, 0, 0);
}
`

const slideOutUp = keyframes`
 from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export {
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideOutUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  fadeIn,
}

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: false,
  mirror: true,
  easing: 'ease-out-cubic',
  anchorPlacement: 'top-bottom"',
  offset: 100, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
});

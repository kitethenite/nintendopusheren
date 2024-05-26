import { useLottie } from "lottie-react";
import Footer from "../../public/animations/Footer.json";

const MarioFooter = () => {
  const options = {
    animationData: Footer,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div  style={{ width: '100%', height:'229,183', maxWidth: '1100px', boxSizing: 'inline-box', position: 'relative'}}>
    <div style={{ margin: '100px 0 0 0', height:'229,183', padding: 0, margin: 0, position: 'relative', top:'20%', transform:'translate3d(0px, 7px, 0px)' }}> {/* Adjust the margin value to move the animation down */}
      {View}
    </div>
    <style jsx>{`
      :global(svg) {
        display: block;
        width: 100%;
        height: 300px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
  );
};

export default MarioFooter;
// // components/PulsatingBackground.tsx
// import React from "react";
// import styled, { keyframes } from "styled-components";

// const pulseAnimation = keyframes`
//   0% {
//     background-position: 0 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0 50%;
//   }
// `;

// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(90deg, #4b4b4b 25%, #cccccc 50%, #4b4b4b 75%);
//   background-size: 200% 100%;
//   animation: ${pulseAnimation} 5s infinite;
//   z-index: -1;
// `;

// const PulsatingBackground: React.FC = ({ children }) => {
//   return (
//     <div style={{ position: "relative" }}>
//       <Background />
//       {children}
//     </div>
//   );
// };

// export default PulsatingBackground;

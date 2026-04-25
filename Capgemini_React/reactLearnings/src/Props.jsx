const Props = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Props;

//this is cleaner way which is called destructuring
// const Props = ({ courseName }) => {
//   return (
//     <div>
//       <h1>{courseName}</h1>
//     </div>
//   );
// };

// export default Props;

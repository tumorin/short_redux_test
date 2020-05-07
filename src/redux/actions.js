// const addTextAction = text => ({
//   type: "ADD",
//   payload: text
// });

const addTextAction = text => {
  console.log(text);
  return {
    type: "ADD",
    payload: text
  };
};

export default addTextAction;

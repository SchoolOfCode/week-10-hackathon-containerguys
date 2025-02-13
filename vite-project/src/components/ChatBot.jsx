function ChatBot({ setShowElement, setFoodPref }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.botInput);
    setShowElement(true);
    setFoodPref(formJson.botInput.split(","));
    console.log(formData);
    console.log(form);
  }

  return (
    <>
      <h4>Hello, what food do you like? Any dietary requirements?</h4>
      <form method="post" onSubmit={handleSubmit}>
        <input name="botInput"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ChatBot;

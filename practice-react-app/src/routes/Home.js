import Button from "../component/Button";

function Home() {
  const onClick = () => {
    console.log("cliked");
  };
  return (
    <div>
      <h2>Welcome to Popular Movies TOP 20</h2>
      <p>choose one movie for details on left List</p>
      <Button
        text="Start"
        theme="primary"
        size="big"
        disabled={false}
        width="11rem"
        onClick={onclick}
      />
    </div>
  );
}

export default Home;

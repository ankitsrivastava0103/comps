import Button from "../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button outline success rounded>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;

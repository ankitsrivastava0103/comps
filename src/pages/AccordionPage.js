import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      lable: "Can i you React on a project",
      content:
        "You can use React on any project you want. Loren10 is used mostly everywhere",
      id: "jnvunvr",
    },
    {
      lable: "Can i you JS on a project",
      content: "You can use JS on any project you want",
      id: "gvyubhinjok",
    },
    {
      lable: "Can i you CSS on a project",
      content: "You can use CSS on any project you want",
      id: "rjvoko",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;

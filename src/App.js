import Accordion from "./components/Accordion";

///////////////////////////////////////////

function App() {
  const items = [
    {
      id: "eret",
      label: "Can I use React on a project?",
      content:
        "You Can use React on any project you want.You Can use React on any project you want.You Can use React on any project you want.",
    },
    {
      id: "vbbn",
      label: "Can I use JavaScript on a project?",
      content:
        "You Can use JavaScript on any project you want.You Can use JavaScript on any project you want.You Can use JavaScript on any project you want.",
    },
    {
      id: "bio",
      label: "Can I use CSS on a project?",
      content:
        "You Can use CSS on any project you want.You Can use CSS on any project you want.You Can use CSS on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;

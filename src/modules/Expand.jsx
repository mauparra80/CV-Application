
//controls the expand action in all forms
function Expand(e) {
  const [expand, setExpand] = useState(false);
  const [expandButton, setExpandButton] = useState("˅");

  function toggleExpand(e) {
    e.preventDefault()
    setExpand(!expand);
    setExpandButton(expand ? '˅': '✕');
  }
}

export default Expand;
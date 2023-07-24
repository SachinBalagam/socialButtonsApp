const Button = (props) => {
  const { name, buttonCss } = props;
  return <button className={`button ${buttonCss}`}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="card">
      <Button name="Like" buttonCss="like" />
      <Button name="Comment" buttonCss="comment" />
      <Button name="Share" buttonCss="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

import React from "react";

const Button = ({ text }) => {
  return (
    <div id="parent">
      <iframe src="https://example.com"></iframe>
      <button
        data-type="button-simple"
        data-button-background-color="#42a2f2"
        data-button-color="#ffffff"
        className="cleverpush-content-button"
        data-button-text={text}
      />
    </div>
  );
};

export default Button;

import React from "react";

function CodeSnippet({ title, language }) {
    const codesnip = `hello lubie kasztany`
  return (
    <>
      <div className="snippet-header">
        <h3 className="snippet-title">{title}</h3>
        <span className="snippet-language">{language}</span>
        <code className="code-Snippet"><br/>
            <pre>
                {codesnip}
            </pre>
        </code>
      </div>
    </>
  );
}

export default CodeSnippet;
/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";

function GlobalStyles() {
  return (
    <div>
      <Global
        Styles={css`
          body {
            background-color: #ddd;
          }
        `}
      />
    </div>
  );
}

export default GlobalStyles;

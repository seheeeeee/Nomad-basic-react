/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";

function Button({ text, theme, size, disabled, width, onClick }) {
  return (
    <button
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  theme: "primary",
  size: "medium",
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const themes = {
  primary: css`
    background: #20c997;
    color: white;
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
  `,
  tertiary: css`
    background: none;
    color: #20c997;
  `,
};
const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired,
};
export default Button;

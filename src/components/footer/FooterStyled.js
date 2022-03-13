import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid rgba(192, 192, 192, 1);
  .FooterWrapper {
    display: flex;
    justify-content: center;
  }
  .FooterText {
    color: rgba(192, 192, 192, 1);
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
    width: 330px;
    margin-bottom: 4px;
    margin-top: 4px;
  }
  .FooterIcon {
    fill: rgba(192, 192, 192, 1);
    animation: reactIcon 1500ms infinite alternate;
  }
  @keyframes reactIcon {
    from {
      fill: rgba(192, 192, 192, 1);
    }
    to {
      fill: rgba(255, 105, 135, 0.3);
    }
  }

  .FooterDeveloperText {
    color: rgba(192, 192, 192, 1);
    text-align: center;
    font-size: 12px;
    width: 330px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .Developer {
    text-decoration: underline;
    font-style: italic;
    color: rgba(192, 192, 192, 1);
    cursor: pointer;
  }
  .Developer:hover {
    color: rgba(255, 105, 135, 0.5);
  }
`;

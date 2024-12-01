import "./Email.css";

function Email() {
  return (
    <div className="email">
      <input type="email" placeholder="Email address" className="email-input" />
      <buttton className="email-button">
        Get Started
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            width="22"
            height="22"
            data-icon="ChevronRightStandard"
            aria-hidden="true"
          >
            <path
              d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </buttton>
    </div>
  );
}

export default Email;

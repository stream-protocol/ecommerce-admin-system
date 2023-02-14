import React from "react"

const LoginLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-1 grid-rows-1 min-h-screen">
        <div
          className="flex flex-col items-center"
          style={{
            background: "linear-gradient(73.29deg, #0F172A 0%, #4756DD 100%)",
          }}
        >
          {children}
          <div className="text-grey-0 inter-base-regular pb-12">
            © 2023 Stream Protocol / StreamPay. All Rights Reserved. <span>&#183;</span>{" "}
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href="mailto:contact@streamprotocol.org"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout

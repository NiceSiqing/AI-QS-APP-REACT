import React from "react";
import "./AgreementCheckbox.less";

export default function AgreementCheckbox({
  checked,
  onChange,
  tosUrl = "/user-agreement",
  privacyUrl = "/privacy-policy"
}) {
  return (
    <div className="agreement-checkbox-box">
      <label className="agreement-checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="agreement-checkbox"
        />
        我已阅读并同意
        <a
          href={tosUrl}
          className="agreement-link"
          target="_blank"
          rel="noopener noreferrer"
        >《用户服务协议》</a>
        和
        <a
          href={privacyUrl}
          className="agreement-link"
          target="_blank"
          rel="noopener noreferrer"
        >《隐私保护政策》</a>
      </label>
    </div>
  );
}

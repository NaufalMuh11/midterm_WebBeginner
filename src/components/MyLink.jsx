import React from "react";

function MyLink ({ href, children }) {
  return (
    <a href={href} target="_blank" className="bg-[#333] hover:bg-slate-50 text-slate-50 hover:text-[#333] text-sm font-semibold py-3 rounded-lg hover:scale-105 active:scale-90 duration-300 w-94">
      {children}
    </a>
  );
};

export default MyLink;

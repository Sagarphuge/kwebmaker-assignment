import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button className="rounded-full cursor-pointer w-fit bg-primary px-12 py-3 text-sm text-white transition hover:opacity-70">
      {text}
    </button>
  );
}

export default Button;

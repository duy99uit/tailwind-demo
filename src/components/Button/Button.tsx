import React from 'react';

function Button(props: any) {
  return (
    <button className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
      {props.title}
    </button>
  );
}

export default Button;

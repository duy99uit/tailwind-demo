import React from 'react';

function Button(props: any) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 md:bg-green-500 lg:bg-red-500 text-white font-bold py-2 px-4 rounded">
      {props.title}
    </button>
  );
}

export default Button;

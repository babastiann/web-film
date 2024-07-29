import React from 'react';

const CollapseItem = ({ title, content, defaultChecked }) => {
  console.log('CollapseItem Props:', { title, content, defaultChecked });

  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="checkbox" className="peer" defaultChecked={defaultChecked} />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        {content}
      </div>
    </div>
  );
};

export default CollapseItem;

import React, { forwardRef } from "react";

const BoardListItem = forwardRef(({ index, userID, displayName, score }, ref) => (
    <div ref={ref} >
    <div className="listItem">
    <div>
        {index}. {displayName}
    </div>
    <div>
        {score}
    </div>
    </div>
  </div>
));


export default BoardListItem;

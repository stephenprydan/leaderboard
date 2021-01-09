import React, { useState, createRef, useEffect } from "react";
import LeaderBoardData from "../data/LeaderBoardData";
import AnimationBoardList from "./AnimationBoardList";
import BoardListItem from "./BoardListItem";

export default function LeaderBoard() {
  const [boardData, setBoardData] = useState(LeaderBoardData);

  useEffect(() => {
    setTimeout(()=>{
        reorder();
    }, 5000) 
  }, [])

  const reorder = () => {
    let reOrderedData = boardData
      .map((item) => {
        item.score = Math.floor(Math.random() * 1500);
        return item;
      })
      .sort((item1, item2) => item2.score - item1.score);
    setBoardData(reOrderedData);

    setTimeout(()=>{
        reorder();
    }, 5000)
  };
  return (
    <div className="list-wrapper">
      <div className="leadboard-list">
        <AnimationBoardList>
          {boardData.map((item, index) => {
            return (
              <BoardListItem
                key={item.userID}
                index={index + 1}
                displayName={item.displayName}
                userID={item.userID}
                score={item.score}
                ref={createRef()}
              ></BoardListItem>
            );
          })}
        </AnimationBoardList>
      </div>
    </div>
  );
}

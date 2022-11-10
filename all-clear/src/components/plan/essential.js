import React, { useState } from "react";
import "../../css/essential.css"
import TableLabel from "./tableLabel";
import EssentialTable from "./essentialTable";
import EssentialLiberalTable from "./essentialLiberalTable";
//01. 필수 검색 옵션 컴포넌트
const Essential=({tracks,changeColorState, changeTracks, changeGrade,changeCode})=>{
    const [option,setOption]=useState(1);
    const marginValue=["50px","5px"];
    const optionContent=["교양","전공"];

    const optionChange=(index)=>{
        setOption(index);
        changeGrade([])//옵션이 바뀌면 세부 겁색 내용 초기화
        changeCode([]);
        changeColorState(false);
    }
    return (<div className="essential-warp">
            <h4>01. 필수 검색 옵션</h4>{
            optionContent.map((data,i)=>(
                <TableLabel key={i} color={i===option? true : false} index={i} content={data} marginValue={marginValue[i]} onSelect={optionChange}/> 
            ))
            }
            {
                option===1?<EssentialTable tracks={tracks} changeColorState={changeColorState} changeTracks={changeTracks}/>: <EssentialLiberalTable tracks={tracks} changeColorState={changeColorState} changeTracks={changeTracks}/>
            } 
           
        </div>
    );
}
    

export default Essential;
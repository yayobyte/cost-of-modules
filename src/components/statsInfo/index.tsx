import React from "react";
import { StatsInfoProps } from "../../types/statsInto";
import { StatsInfoContainer } from "./styled";

const StatsInfo = ({title, unit, amount} : StatsInfoProps) => (
    <StatsInfoContainer>
        <div className="unit">{amount} <span className="kb-unit">{unit}</span></div>
        <div className="title">{title}</div>
    </StatsInfoContainer>
);

export default StatsInfo;
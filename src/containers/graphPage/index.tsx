import React from "react";
import { BarChart, Bar, XAxis } from 'recharts';
import { SearchBar, StatsInfo } from "../../components";
import { GraphPageContainer } from "./styled";
import logo from '../../assets/img/github-logo.png';
import messages from "../../i18n";
import { useSizes, useVersionsArray } from "../../redux/store";
import { calculateSize, get2GTimeFromSize, get3GTimeFromSize } from "../../utils";

const GraphPage = () => {
    const { gzip, size } = useSizes();
    const { versionsArray } = useVersionsArray();
    console.log(versionsArray);

    const onRowClick = (e: any) => {
        console.log(e); 
    }
    return (
        <GraphPageContainer>
            <div className="header">
            <div className="slogan">
                <span className="bundle-text">{messages.graphPage.slogan.bundle}</span>
                <span className="phobia-text">{messages.graphPage.slogan.phobia}</span>
            </div>
                <a href="https://github.com/yayobyte/cost-of-modules" target="_blank"><img src={logo} className="logo" /></a>
            </div>
            <SearchBar />
            {gzip && size && 
                <div className="statistics-row">
                    <div className="statistics-data">
                        <h3 className="stats-header">{messages.graphPage.bundleSize}</h3>
                        <div className="stats-row">
                            <StatsInfo title={messages.graphPage.minimified} unit="KB" amount={calculateSize(size)} />
                            <StatsInfo title={messages.graphPage.minimifiedGZipped} unit="KB" amount={calculateSize(gzip)} />
                        </div>
                        <hr className="divider"/>
                        <h3 className="stats-header">{messages.graphPage.downloadTime}</h3>
                        <div className="stats-row">
                            <StatsInfo title={messages.graphPage.minimifiedGZipped} unit="S" amount={get2GTimeFromSize(gzip)} />
                            <StatsInfo title={messages.graphPage.emerging3G} unit="S" amount={get3GTimeFromSize(gzip)} />
                        </div>
                    </div>
                    <div className="statistics-graph">
                        <BarChart
                            width={400}
                            height={300}
                            data={versionsArray}
                            margin={{ top: 0, right: 5, bottom: 10, left: 5 }}
                            onClick={onRowClick}
                        >
                            <Bar dataKey="size" fill="#2196f3" barSize={30}/>
                            <XAxis dataKey="version" />
                        </BarChart>
                    </div>
                </div>
            }
        </GraphPageContainer>
    )
};

export default GraphPage;

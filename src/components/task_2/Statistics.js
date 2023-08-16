import { StatisticsLi } from "./StatisticsElement";

export const Statistics = ({objectData}) => {

    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {objectData.map((data)=>(
                    <StatisticsLi key={data.id} objectData={data}/>
                ))}
            </ul>
        </section>
    );   
}
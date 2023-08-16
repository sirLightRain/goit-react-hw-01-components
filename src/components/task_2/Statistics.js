import { StatisticsLi } from "./StatisticsElement";

export const Statistics = ({title, stats}) => {

    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map((data)=>(
                    <StatisticsLi key={data.id} stats={data}/>
                ))}
            </ul>
        </section>
    );   
}
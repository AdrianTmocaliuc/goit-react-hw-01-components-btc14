import Item from './Item/Item';
import s from './Statistics.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : <></>}

      <ul className={s.stat_list}>
        {stats.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((el) => (
        <EventItem
          key={el.id}
          id={el.id}
          title={el.title}
          location={el.location}
          date={el.date}
          image={el.image}
        />
      ))}
    </ul>
  );
}

export default EventList;

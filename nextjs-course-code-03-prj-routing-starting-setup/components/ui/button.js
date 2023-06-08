import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <div>
          <a className={classes.btn}>{props.children}</a>
        </div>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}

export default Button;

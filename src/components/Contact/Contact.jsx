import { BiSolidPhone } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.infoBlock}>
        <div className={css.container}>
          <IoPerson className={css.icon} size="20" />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.container}>
          <BiSolidPhone className={css.icon} size="20" />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

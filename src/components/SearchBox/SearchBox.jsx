import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <span className={css.titleBox}>Find contacts by name</span>
      <input
        className={css.search}
        type="text"
        placeholder=""
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

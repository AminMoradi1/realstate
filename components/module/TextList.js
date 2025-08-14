import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";

import styles from "@/module/TextList.module.css";

function TextList({ title, profileData, setProfileData, type }) {
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (idx) => {
    const list = [...profileData[type]];
    list.splice(idx, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  const changeHandler = (e, idx) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[idx] = value;
    setProfileData({ ...profileData, [type]: list });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, idx) => (
        <div className={styles.card} key={idx}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, idx)}
          />
          <button onClick={() => deleteHandler(idx)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        افزودن <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;

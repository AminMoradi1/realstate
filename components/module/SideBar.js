import { HiFilter } from "react-icons/hi";
import styles from "@/module/SideBar.module.css";
import Link from "next/link";

function SideBar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];

  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href={"/buy-residential"}>همه</Link>
      {queries.map((query , idx) => (
        <Link key={idx}
          href={{
            pathname: "buy-residential",
            query: { category: Object.keys(query) },
          }}
        >
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;

import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import ItemList from "../module/ItemList";
import Title from "../module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "../module/ShareButton";

import styles from "@/template/DetailsPage.module.css";

function DetailsPage({ data }) {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };

  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <Title>توضیحات</Title>
        <p>{data.description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={data.amenities} />
        <Title>قوانین</Title>

        <ItemList data={data.rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {data.realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(data.phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[data.category]}
            {categories[data.category]}
          </p>
          <p>{sp(data.price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

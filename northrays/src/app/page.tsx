import Image from "next/image";
import aboutStyle from "./page.module.scss";

export default function Home() {
  return (
    <div className={aboutStyle.page}>

      <p className={aboutStyle.textgreen}>
        h world
      </p>
     
    </div>
  );
}

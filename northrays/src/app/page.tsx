import Image from "next/image";
import aboutStyle from "./page.module.css";

export default function Home() {
  return (
    <div className={aboutStyle.page}>

      <p className={aboutStyle.textgreen}>
        heloo world
      </p>
     
    </div>
  );
}

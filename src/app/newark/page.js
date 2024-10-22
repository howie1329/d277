import Image from "next/image";
import React from "react";
import newark1 from "../newark/images/newark1.jpeg";
import newark3 from "../newark/images/newark3.jpeg";
import newark2 from "../newark/images/newark2.jpg";
import styles from "../newark/newark.module.css";

function Page() {
  return (
    <>
      <head>
        <title>Newark</title>
      </head>
      <div className={styles.pageDiv}>
        <section>
          <h2> Newark New Jersey</h2>
          <div className={styles.gridContainer}>
            <Image
              src={newark1}
              width="300"
              height="300"
              alt="view across a river"
            />
            <Image
              src={newark3}
              alt="picture of newark museam"
              width="300"
              height="300"
            />
            <Image src={newark2} alt="newark image" width="300" height="300" />
          </div>
          <div className={styles.gridContainer}>
            <Image src={newark1} alt="newark image" width="300" height="300" />
            <Image src={newark3} alt="newark image" width="300" height="300" />
            <Image src={newark2} alt="newark image" width="300" height="300" />
          </div>
        </section>
        <div className={styles.textDiv}>
          <aside className={styles.infoDiv}>
            <ul>
              <li>The Citys Population is 314,147 </li>
              <li>The Year The City Was Incorporated was 1836</li>
              <li>
                The region of the state in which the city is located is called
                North Jersey
              </li>
              <li>The classification of the city is urban</li>
              <li>
                The average income level of the city is $41,638 which is lower
                then the state median income of $96,346
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <footer>
        <p>
          “Newark, New Jersey Population 2024.” Worldpopulationreview.com, 2024,
          worldpopulationreview.com/us-cities/new-jersey/newark. ‌
        </p>
      </footer>
    </>
  );
}
export default Page;

import React from "react";
import styles from './page.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Deadbolts | Calender",
  description: "View upcoming events"
}

export default function Page() {
  return (
     <div className={styles.calendar_wrapper}>
        <h1>Team Events Calendar</h1>
        <iframe
          src="https://embed.styledcalendar.com/#vQv8bNfffbCsaNd8Qx29"
          title="Styled Calendar"
          className={styles.styled_calendar_container}
          style={{ width: "100%", border: "none", height: "100%" }}
          data-cy="calendar-embed-iframe"
        ></iframe>
        <script
          async
          type="module"
          src="https://embed.styledcalendar.com/assets/parent-window.js"
        ></script>
      </div>
  )
}

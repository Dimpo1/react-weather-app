import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let dayOfWeek = days[day];
  return `
      ${dayOfWeek} ${hour}:${minute}
    `;
}

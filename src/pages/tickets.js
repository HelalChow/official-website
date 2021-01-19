import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css'


const TicketsLinkPage = () => {
  const prefaceUrl = "0; url="
  const redirectUrl = "https://calendar.google.com/calendar/u/0/r/week"
  return (
    <>
      <Helmet>
        <meta http-equiv="Refresh" content={prefaceUrl + redirectUrl}/>
      </Helmet>
    </>
  )
}

export default TicketsLinkPage

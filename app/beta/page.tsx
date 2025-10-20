import type { Metadata } from "next"
import BetaLandingClient from "./beta-client"

export const metadata: Metadata = {
  themeColor: "#000000",
}

export default function Page() {
  return <BetaLandingClient />
}

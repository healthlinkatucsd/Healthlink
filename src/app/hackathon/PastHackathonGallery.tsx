import PhotoCarousel from "./PhotoCarousel";

const photos = [
  { title: "HealthLink Life Sciences Hackathon", detail: "The community at The Basement", alt: "Hackathon participants gathered in front of the HealthLink presentation" },
  { title: "Built together", detail: "Participants and organizers", alt: "Group photo of the HealthLink hackathon community at The Basement" },
  { title: "1st place: PATH", detail: "Personalized Artificial Intelligence tool for Healing", alt: "PATH team receiving first-place prizes" },
  { title: "2nd place: Exhale Biosciences", detail: "Winning builds", alt: "Exhale Biosciences team with their second-place prizes" },
  { title: "3rd place: BlurBS", detail: "Medically Accurate Browsing", alt: "BlurBS team receiving third-place prizes" },
  { title: "Inside the hackathon", detail: "Learning, building, and sharing ideas", alt: "Participants seated at tables during a hackathon session" },
  { title: "On the prize table", detail: "HHKB keyboards", alt: "HHKB Professional Hybrid keyboards displayed on the prize table" },
  { title: "Symmyo", detail: "Track award: Reimagining the Care Experience", alt: "Symmyo team with their track prizes" },
  { title: "Take 2", detail: "Track award: Smarter Screening", alt: "Take 2 team receiving a track prize" },
  { title: "Clarity AI", detail: "Track award: Trust, Ethics, and Safety", alt: "Clarity AI team holding their track prizes" },
].map((photo, position) => ({ ...photo, src: `/hackathon/last-year/${String(position + 1).padStart(2, "0")}.png` }));

export default function PastHackathonGallery() {
  return <PhotoCarousel slides={photos} label="Last year's hackathon photos" />;
}

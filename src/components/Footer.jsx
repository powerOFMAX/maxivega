import { SectionWrapper } from "../hoc"

export const Footer = () => {
  return (
    <footer className="text-center">
      <h5 className="text-center">Made with <span role="img" aria-label="heart">❤️</span> by Maximiliano Vega</h5>
      <p className="text-xs	"><a href="https://skfb.ly/6DxnV" target="_blank" rel="noreferrer">3D EARTH was made by Stéphane Agullo</a></p>
    </footer>
  )
}

export default SectionWrapper(Footer, "")
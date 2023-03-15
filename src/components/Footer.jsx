function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">

            <a href="https://twitter.com/Sagar33732459" target="_blank" rel="noreferrer" style={{
              color: "white"
            }}> <i className="fa-brands fa-twitter"></i></a>

            <a href="https://discord.gg/DKWKpgd" target="_blank" rel="noreferrer" style={{
              color: "white"
            }}> <i className="fa-brands fa-discord"></i></a>

            <a href="https://www.twitch.tv/daystar_bob" target="_blank" rel="noreferrer" style={{
              color: "white"
            }}> <i className="fa-brands fa-twitch"></i></a>

            <a href="https://www.youtube.com/@daystar_bob" target="_blank" rel="noreferrer" style={{
              color: "white"
            }}> <i className="fa-brands fa-youtube"></i></a>


          </div>
          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

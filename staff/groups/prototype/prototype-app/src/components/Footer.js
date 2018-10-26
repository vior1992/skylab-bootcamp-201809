import React from 'react'

function Footer() {
    {/* <section class="footer_about">
        <h5>About Us</h5>
        <a class="footer__anchor" href="about">About MailChimp</a>
        <a class="footer__anchor" href="jobs">Jobs</a>
        <a class="footer__anchor" href="customer-stories">Customer Stories</a>
        <a class="footer__anchor" href="press-resources">Press Resources</a>
        <a class="footer__anchor" href="press-releases">Press Releases</a>
        <a class="footer__anchor" href="integration-fund">Integration Fund</a>
        <a class="footer__anchor" href="brand-assets">Brand Assets</a>
    </section>
    <section class="footer__connect">
        <h5>Connect With Us</h5>
        <a class="footer__anchor" href="integrations-plugins">Integrations & Plugins</a>
        <a class="footer__anchor" href="mailchimp-api">MailChimp API</a>
        <a class="footer__anchor" href="mailchimp-labs">MailChimp Labs</a>
    </section>
    <section class="footer__contact">
        <h5>Contact With Us</h5>
        <a class="footer__anchor" href="contact">Contact MailChimp</a>
        <a class="footer__anchor" href="partner">Partner With Us</a>
        <a class="footer__anchor" href="abuse-desk">Abuse Desk</a>
        <a class="footer__anchor" href="status">MailChimp Status</a>
    </section>
    <section class="footer__legal">
        <h5>Legal Info</h5>
        <a class="footer__anchor" href="terms">Terms of Use</a>
        <a class="footer__anchor" href="privacy">Privacy Poliy</a>
        <a class="footer__anchor" href="copyright">Copyright Policy</a>
    </section> */}
    
    return (
      <footer className="footer my-4">
        <div className="container">
        <div className="copy">Developed by <span>Prototype</span> group</div>
          <div className="tmdb">Powered by <a href="https://www.themoviedb.org" target="_blank" alt="The Movie Db"><img src="https://www.themoviedb.org/assets/1/v4/logos/208x226-stacked-blue-e6df1ff1a41c48555a15336ae8a6b3c6f77dfae41d2a50b78e4794c1ce048792.png" alt="The Movie Db" /></a></div>
        </div>
      </footer>
    )
}

export default Footer
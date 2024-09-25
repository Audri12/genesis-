


import TestimonialSlider from "./Components/Pages/About/AbouOurTestimonials"
import AboutBanner from "./Components/Pages/About/AboutBanner"
import AboutBannerCard from "./Components/Pages/About/AboutBannerCard"
import AboutBannerLayout from "./Components/Pages/About/AboutBannerLayout"
import AboutBannerwithbg from "./Components/Pages/About/AboutBannerwithbg"
import AboutCardDraft from "./Components/Pages/About/AboutCardDraft"
import AboutTopBanner from "./Components/Pages/About/AboutTopBanner"

import MeetTheTeam from "./Components/Pages/About/MeetTheTeam"


import TestimonialWithBg from "./Components/Pages/About/TestimonialWithBg"
import ContactUsLayout from "./Components/Pages/ContactUsLayout"
import FAQ from "./Components/Pages/FAQ/FAQ"
import FAQHeader from "./Components/Pages/FAQ/FAQHeader"
import FAQSection from "./Components/Pages/FAQ/FAQSection"
import NewsClassicLayout from "./Components/Pages/News/NewsClassicLayout"
import AllMembersDraft3 from "./Components/Pages/OurTeam/AllMembers"
import OurTeamBanner from "./Components/Pages/OurTeam/OurTeamBanner"
import RequestForm from "./Components/Pages/OurTeam/RequestForm"
import TeamSectionFAQ from "./Components/Pages/OurTeam/TeamSectionFAQ"





function App() {


  return (
    <>
     <div>
      


      <ContactUsLayout></ContactUsLayout>
      <OurTeamBanner></OurTeamBanner>
      <AllMembersDraft3></AllMembersDraft3>
      <NewsClassicLayout></NewsClassicLayout>
      {/* <RequestForm></RequestForm> */}
      {/* <FAQHeader></FAQHeader>
      <FAQSection></FAQSection> */}
      <TeamSectionFAQ></TeamSectionFAQ>
      {/* <AboutBanner></AboutBanner> */}

      <AboutBannerLayout></AboutBannerLayout>
      <AboutBannerCard></AboutBannerCard>
      <AboutTopBanner></AboutTopBanner>
      <AboutBannerwithbg></AboutBannerwithbg>
      <MeetTheTeam></MeetTheTeam>
      <AboutCardDraft></AboutCardDraft>
      {/* <TestimonialSlider></TestimonialSlider> */}
      <TestimonialWithBg></TestimonialWithBg>
      
     
  

     </div>
    </>
  )
}

export default App




import AboutBanner from "./Components/Pages/About/AboutBanner"
import AboutBannerLayout from "./Components/Pages/About/AboutBannerLayout"
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
      <RequestForm></RequestForm>
      <FAQHeader></FAQHeader>
      <FAQSection></FAQSection>
      <TeamSectionFAQ></TeamSectionFAQ>
      <AboutBanner></AboutBanner>
      <AboutBannerLayout></AboutBannerLayout>

     </div>
    </>
  )
}

export default App

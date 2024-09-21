import React from 'react'
import NewsCard from './NewsCard'
import NewsCardDraft from './NewsCardDraft'

const NewsClassicLayout = () => {
  return (
    <div>
        <NewsCard></NewsCard>
        <NewsCardDraft></NewsCardDraft>
    </div>
  )
}

export default NewsClassicLayout